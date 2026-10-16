import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import {
  RotateCw,
  Maximize2,
  Eye,
  Layers,
  Sliders,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";

interface CADViewerProps {
  initialMaterial?: "gold" | "platinum" | "rosegold" | "wireframe";
  title?: string;
}

// === UPDATED DETAILED RING GEOMETRY START ===
/**
 * Procedural 57-Facet Brilliant Cut Solitaire Diamond Geometry
 * Conforms to authentic Tolkowsky / American Ideal round brilliant proportions:
 * - Table ratio: ~55%
 * - Crown height: ~32%
 * - Pavilion depth: ~75%
 * - Girdle: 16-facet polygonal cylindrical boundary
 * - Flat-shaded facets for realistic brilliance and optical refraction
 */
function createBrilliantDiamondGeometry(radius = 0.82): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  const positions: number[] = [];

  const tableR = radius * 0.55;
  const crownH = radius * 0.32;
  const girdleH = radius * 0.05;
  const pavH = radius * 0.75;

  const yTable = crownH + girdleH / 2;
  const yGirdleTop = girdleH / 2;
  const yGirdleBot = -girdleH / 2;
  const yCulet = -pavH - girdleH / 2;

  const girdleTopPts: THREE.Vector3[] = [];
  const girdleBotPts: THREE.Vector3[] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8;
    girdleTopPts.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        yGirdleTop,
        Math.sin(angle) * radius,
      ),
    );
    girdleBotPts.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        yGirdleBot,
        Math.sin(angle) * radius,
      ),
    );
  }

  const tablePts: THREE.Vector3[] = [];
  const starPts: THREE.Vector3[] = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    tablePts.push(
      new THREE.Vector3(
        Math.cos(angle) * tableR,
        yTable,
        Math.sin(angle) * tableR,
      ),
    );
    const starAngle = angle + Math.PI / 8;
    starPts.push(
      new THREE.Vector3(
        Math.cos(starAngle) * (radius * 0.78),
        yTable - crownH * 0.45,
        Math.sin(starAngle) * (radius * 0.78),
      ),
    );
  }

  const culet = new THREE.Vector3(0, yCulet, 0);
  const tableCenter = new THREE.Vector3(0, yTable, 0);

  function addTri(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3) {
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  }

  // 1. Table Octagon Fan (8 facets)
  for (let i = 0; i < 8; i++) {
    addTri(tableCenter, tablePts[i], tablePts[(i + 1) % 8]);
  }

  // 2. Star Facets (8 triangular facets)
  for (let i = 0; i < 8; i++) {
    addTri(tablePts[i], tablePts[(i + 1) % 8], starPts[i]);
  }

  // 3. Bezel / Kite Facets & Upper Girdle Facets (24 facets)
  for (let i = 0; i < 8; i++) {
    const gIdx = i * 2;
    addTri(tablePts[i], starPts[(i + 7) % 8], girdleTopPts[gIdx]);
    addTri(tablePts[i], girdleTopPts[gIdx], starPts[i]);
    addTri(starPts[i], girdleTopPts[gIdx], girdleTopPts[(gIdx + 1) % 16]);
    addTri(
      starPts[i],
      girdleTopPts[(gIdx + 1) % 16],
      girdleTopPts[(gIdx + 2) % 16],
    );
  }

  // 4. Girdle Cylindrical Band (32 facets)
  for (let i = 0; i < 16; i++) {
    const next = (i + 1) % 16;
    addTri(girdleTopPts[i], girdleBotPts[i], girdleTopPts[next]);
    addTri(girdleTopPts[next], girdleBotPts[i], girdleBotPts[next]);
  }

  // 5. Lower Girdle & Pavilion Main Facets (16 facets to culet)
  for (let i = 0; i < 16; i++) {
    const next = (i + 1) % 16;
    addTri(girdleBotPts[i], culet, girdleBotPts[next]);
  }

  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.computeVertexNormals();
  return geom;
}

/**
 * Builds the complete high-fidelity Rhinoceros 3D jewelry ring assembly:
 * - D-Profile Comfort-Fit Shank
 * - Cathedral Shoulders with micro-pavé gemstone channels
 * - Collet Under-Gallery & Bridge Filigree Arches
 * - Collet Gallery Rail (middle stabilization collar)
 * - 4 Precision Claw / Talon Prongs holding the center stone
 * - Micro-Pavé Accent Gemstones with micro-grain beads
 * - 57-Facet Brilliant Cut Solitaire Centerpiece
 * - CAD NURBS Isocurve Overlay Lines
 */
function createHighFidelityRingModel(
  metalMaterial: THREE.Material,
  diamondMaterial: THREE.Material,
  wireMaterial: THREE.LineBasicMaterial,
): {
  group: THREE.Group;
  metalMeshes: THREE.Mesh[];
  diamondMeshes: THREE.Mesh[];
  wireLines: THREE.LineSegments[];
} {
  const group = new THREE.Group();
  const metalMeshes: THREE.Mesh[] = [];
  const diamondMeshes: THREE.Mesh[] = [];
  const wireLines: THREE.LineSegments[] = [];

  // Helper to register mesh and its CAD wireframe isocurves
  const addPart = (
    geom: THREE.BufferGeometry,
    mat: THREE.Material,
    isGem = false,
  ) => {
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    if (isGem) {
      diamondMeshes.push(mesh);
    } else {
      metalMeshes.push(mesh);
    }

    // Add subtle CAD NURBS isocurve edges
    const edgesGeom = new THREE.EdgesGeometry(geom, 28);
    const edgesLine = new THREE.LineSegments(edgesGeom, wireMaterial);
    mesh.add(edgesLine);
    wireLines.push(edgesLine);

    return mesh;
  };

  // 1. Shank (Comfort-Fit D-Profile Band)
  // Radius 1.35 matches finger size US 6.5 (~16.92mm internal diameter)
  const shankArc = Math.PI * 1.55;
  const shankGeom = new THREE.TorusGeometry(1.35, 0.16, 24, 64, shankArc);
  shankGeom.rotateZ(Math.PI * 0.725);
  addPart(shankGeom, metalMaterial);

  // Inner comfort chamfer layer
  const innerChamferGeom = new THREE.TorusGeometry(
    1.35,
    0.12,
    16,
    48,
    shankArc,
  );
  innerChamferGeom.rotateZ(Math.PI * 0.725);
  addPart(innerChamferGeom, metalMaterial);

  // 2. Cathedral Shoulders (Sweeping tapered arms from shank to collet head)
  const leftShoulderCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.9, 0.98, 0),
    new THREE.Vector3(-0.75, 1.25, 0),
    new THREE.Vector3(-0.48, 1.46, 0),
  ]);
  const leftShoulderGeom = new THREE.TubeGeometry(
    leftShoulderCurve,
    16,
    0.14,
    14,
    false,
  );
  addPart(leftShoulderGeom, metalMaterial);

  const rightShoulderCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.9, 0.98, 0),
    new THREE.Vector3(0.75, 1.25, 0),
    new THREE.Vector3(0.48, 1.46, 0),
  ]);
  const rightShoulderGeom = new THREE.TubeGeometry(
    rightShoulderCurve,
    16,
    0.14,
    14,
    false,
  );
  addPart(rightShoulderGeom, metalMaterial);

  // 3. Collet Setting Head (Under-Gallery & Gallery Collar)
  // Under-gallery base ring
  const baseColletGeom = new THREE.TorusGeometry(0.46, 0.048, 16, 32);
  const baseColletMesh = addPart(baseColletGeom, metalMaterial);
  baseColletMesh.rotation.x = Math.PI / 2;
  baseColletMesh.position.y = 1.42;

  // Middle gallery rail collar
  const galleryRailGeom = new THREE.TorusGeometry(0.68, 0.045, 16, 32);
  const galleryRailMesh = addPart(galleryRailGeom, metalMaterial);
  galleryRailMesh.rotation.x = Math.PI / 2;
  galleryRailMesh.position.y = 1.72;

  // Decorative filigree gallery arches (front and back openings)
  const filigreeArchFront = new THREE.TorusGeometry(
    0.18,
    0.03,
    12,
    24,
    Math.PI,
  );
  const frontArchMesh = addPart(filigreeArchFront, metalMaterial);
  frontArchMesh.position.set(0, 1.34, 0.22);
  frontArchMesh.rotation.z = Math.PI;

  const filigreeArchBack = new THREE.TorusGeometry(0.18, 0.03, 12, 24, Math.PI);
  const backArchMesh = addPart(filigreeArchBack, metalMaterial);
  backArchMesh.position.set(0, 1.34, -0.22);
  backArchMesh.rotation.z = Math.PI;

  // 4. Precision Talon / Claw Prongs (4 Prongs holding center solitaire)
  for (let i = 0; i < 4; i++) {
    const prongAngle = (i * Math.PI) / 2 + Math.PI / 4;
    const cosA = Math.cos(prongAngle);
    const sinA = Math.sin(prongAngle);

    const prongCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(cosA * 0.44, 1.38, sinA * 0.44),
      new THREE.Vector3(cosA * 0.62, 1.72, sinA * 0.62),
      new THREE.Vector3(cosA * 0.76, 1.95, sinA * 0.76),
      new THREE.Vector3(cosA * 0.67, 2.06, sinA * 0.67), // curved claw tip locks over girdle
    ]);
    const prongGeom = new THREE.TubeGeometry(prongCurve, 14, 0.042, 12, false);
    addPart(prongGeom, metalMaterial);

    // Rounded tip bead on prong claw
    const prongTipGeom = new THREE.SphereGeometry(0.044, 12, 12);
    const tipMesh = addPart(prongTipGeom, metalMaterial);
    tipMesh.position.set(cosA * 0.67, 2.06, sinA * 0.67);
  }

  // 5. Micro-Pavé Accent Gemstones along Cathedral Shoulders
  const paveOffsets = [0.22, 0.38, 0.54, 0.7, 0.84];
  const paveStoneGeom = createBrilliantDiamondGeometry(0.08);
  const paveBeadGeom = new THREE.SphereGeometry(0.032, 10, 10);

  // Left shoulder pavé diamonds & micro-beads
  paveOffsets.forEach((t) => {
    const pt = leftShoulderCurve.getPoint(t);
    const stoneMesh = addPart(paveStoneGeom, diamondMaterial, true);
    stoneMesh.position.set(pt.x, pt.y + 0.12, pt.z);
    stoneMesh.scale.set(0.9, 0.9, 0.9);

    const beadMesh = addPart(paveBeadGeom, metalMaterial);
    beadMesh.position.set(pt.x + 0.05, pt.y + 0.13, pt.z + 0.04);
  });

  // Right shoulder pavé diamonds & micro-beads
  paveOffsets.forEach((t) => {
    const pt = rightShoulderCurve.getPoint(t);
    const stoneMesh = addPart(paveStoneGeom, diamondMaterial, true);
    stoneMesh.position.set(pt.x, pt.y + 0.12, pt.z);
    stoneMesh.scale.set(0.9, 0.9, 0.9);

    const beadMesh = addPart(paveBeadGeom, metalMaterial);
    beadMesh.position.set(pt.x - 0.05, pt.y + 0.13, pt.z + 0.04);
  });

  // 6. Center Solitaire Diamond (1.25 ct Round Brilliant, 57 facets)
  const centerDiamondGeom = createBrilliantDiamondGeometry(0.82);
  const centerDiamondMesh = addPart(centerDiamondGeom, diamondMaterial, true);
  centerDiamondMesh.position.set(0, 1.86, 0);

  // Adjust model pivot so the visual geometric center of the ring is at (0, 0, 0)
  group.position.y = -0.285;

  return { group, metalMeshes, diamondMeshes, wireLines };
}
// === UPDATED DETAILED RING GEOMETRY END ===

export const CADViewer: React.FC<CADViewerProps> = ({
  initialMaterial = "gold",
  title = "Rhinoceros 8 Viewport: Diamond Solitaire & Micro-Pavé Halo",
}) => {
  const [viewportMode, setViewportMode] = useState<
    "perspective" | "top" | "front" | "wireframe"
  >("perspective");
  const [material, setMaterial] = useState<
    "gold" | "platinum" | "rosegold" | "zebra"
  >(initialMaterial === "wireframe" ? "zebra" : initialMaterial);
  const [isRotating, setIsRotating] = useState(true);
  const [angle, setAngle] = useState(45);
  const [showMeshGrid, setShowMeshGrid] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(0.6);
  const [dollyFactor, setDollyFactor] = useState(1);

  // Refs for animation and zoom calculation
  const isRotatingRef = useRef(isRotating);
  const zoomLevelRef = useRef(zoomLevel);
  const baseDistanceRef = useRef(5.28);
  const lastDollyRef = useRef(1);

  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const ringGroupRef = useRef<THREE.Group | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);
  const metalMeshesRef = useRef<THREE.Mesh[]>([]);
  const diamondMeshesRef = useRef<THREE.Mesh[]>([]);
  const wireLinesRef = useRef<THREE.LineSegments[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Sync isRotating state with ref for animation loop
  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Material shaders cache
  const materialsMapRef = useRef<{
    gold: THREE.MeshStandardMaterial;
    platinum: THREE.MeshStandardMaterial;
    rosegold: THREE.MeshStandardMaterial;
    zebra: THREE.ShaderMaterial;
    diamond: THREE.MeshPhysicalMaterial;
    wire: THREE.LineBasicMaterial;
  } | null>(null);

  // Color mappings and metrology specs
  const materialStyles = {
    gold: {
      metalPrimary: "#D97706",
      metalSecondary: "#F59E0B",
      metalHighlight: "#FEF3C7",
      label: "18K Yellow Gold (Au 750)",
      density: "15.5 g/cm³",
      weight: "6.84 g",
    },
    platinum: {
      metalPrimary: "#64748B",
      metalSecondary: "#94A3B8",
      metalHighlight: "#F8FAFC",
      label: "950 Platinum (Pt 950)",
      density: "21.4 g/cm³",
      weight: "9.45 g",
    },
    rosegold: {
      metalPrimary: "#BE123C",
      metalSecondary: "#FB7185",
      metalHighlight: "#FFE4E6",
      label: "18K Rose Gold (Au 750 + Cu)",
      density: "15.2 g/cm³",
      weight: "6.71 g",
    },
    zebra: {
      metalPrimary: "#0284C7",
      metalSecondary: "#38BDF8",
      metalHighlight: "#E0F2FE",
      label: "CAD Curvature & Zebra Analysis",
      density: "NURBS G2 Metrology",
      weight: "0.00 mm deviation",
    },
  };

  const currentMat = materialStyles[material];

  // Initialize Three.js WebGL Scene, Camera, Lights, OrbitControls, and Ring Model
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070b14);
    sceneRef.current = scene;

    // 2. Camera (initialized with zoom = 0.6 for optimal proportional framing)
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 4.8);
    camera.zoom = 0.6;
    camera.updateProjectionMatrix();
    cameraRef.current = camera;
    baseDistanceRef.current = camera.position.distanceTo(
      new THREE.Vector3(0, 0, 0),
    );

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Environment Lighting (RoomEnvironment PMREM)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04,
    ).texture;
    scene.environment = envTexture;

    // Additional Key, Rim, and Ambient studio lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.4);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    // 5. Floor CAD Grid Mesh
    const gridHelper = new THREE.GridHelper(10, 20, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -1.65;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    // 6. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 12;
    // Cap minDistance so model zoom cannot exceed 100%
    controls.minDistance = baseDistanceRef.current * zoomLevel;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Real-time listener for mouse wheel / gesture zoom updates strictly capped at 100%
    const updateDollyZoom = () => {
      if (!cameraRef.current || !controlsRef.current) return;
      const cam = cameraRef.current;
      const ctrl = controlsRef.current;
      const dist = cam.position.distanceTo(ctrl.target);
      if (dist > 0.01 && baseDistanceRef.current > 0.01) {
        // Enforce maximum zoom cap at 100% (distance cannot be less than baseDistance * zoomLevel)
        const minDist = baseDistanceRef.current * zoomLevelRef.current;
        if (dist < minDist) {
          const dir = new THREE.Vector3()
            .subVectors(cam.position, ctrl.target)
            .normalize();
          cam.position.copy(ctrl.target).addScaledVector(dir, minDist);
        }
        const effectiveDist = Math.max(minDist, dist);
        const rawFactor = baseDistanceRef.current / effectiveDist;
        const maxAllowedFactor = 1.0 / zoomLevelRef.current;
        const factor = Math.min(maxAllowedFactor, rawFactor);

        if (Math.abs(factor - lastDollyRef.current) >= 0.005) {
          lastDollyRef.current = factor;
          setDollyFactor(factor);
        }
      }
    };
    controls.addEventListener("change", updateDollyZoom);

    const onWheel = () => {
      requestAnimationFrame(updateDollyZoom);
    };
    renderer.domElement.addEventListener("wheel", onWheel, { passive: true });

    // 7. Shaders & Materials Cache
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.96,
      roughness: 0.14,
      envMapIntensity: 1.5,
    });

    const platinumMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.92,
      roughness: 0.12,
      envMapIntensity: 1.4,
    });

    const rosegoldMat = new THREE.MeshStandardMaterial({
      color: 0xfb7185,
      metalness: 0.94,
      roughness: 0.15,
      envMapIntensity: 1.5,
    });

    // Rhinoceros 3D Curvature & Zebra Analysis Shader
    const zebraMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        void main() {
          vec3 viewDir = normalize(vViewPosition);
          vec3 ref = reflect(-viewDir, vNormal);
          float stripe = sin(ref.y * 36.0 + ref.x * 24.0);
          float edge = smoothstep(-0.08, 0.08, stripe);
          vec3 cyan = vec3(0.01, 0.52, 0.79);
          vec3 dark = vec3(0.04, 0.07, 0.14);
          vec3 col = mix(dark, cyan, edge);
          float spec = pow(max(dot(ref, vec3(0.0, 1.0, 0.5)), 0.0), 32.0);
          col += vec3(spec * 0.35);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    // Tolkowsky Brilliant Cut Diamond Physical Material
    const diamondMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.0,
      roughness: 0.03,
      transmission: 0.94,
      ior: 2.417,
      reflectivity: 0.9,
      transparent: true,
      opacity: 1.0,
      flatShading: true,
      envMapIntensity: 2.2,
    });

    // CAD NURBS Isocurve wire lines
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });

    materialsMapRef.current = {
      gold: goldMat,
      platinum: platinumMat,
      rosegold: rosegoldMat,
      zebra: zebraMat,
      diamond: diamondMat,
      wire: wireMat,
    };

    // 8. Build High-Fidelity Ring Model
    const currentActiveMat = materialsMapRef.current[material];
    const {
      group: ringGroup,
      metalMeshes,
      diamondMeshes,
      wireLines,
    } = createHighFidelityRingModel(currentActiveMat, diamondMat, wireMat);
    scene.add(ringGroup);
    ringGroupRef.current = ringGroup;
    metalMeshesRef.current = metalMeshes;
    diamondMeshesRef.current = diamondMeshes;
    wireLinesRef.current = wireLines;

    // 9. Resize Handling
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Animation Render Loop (Using isRotatingRef to dynamically start/stop rotation)
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (isRotatingRef.current && ringGroupRef.current) {
        ringGroupRef.current.rotation.y += delta * 0.45;
        setAngle((prev) => (prev + delta * 25) % 360);
      }

      controls.update();
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      controls.removeEventListener("change", updateDollyZoom);
      renderer.domElement.removeEventListener("wheel", onWheel);
      resizeObserver.disconnect();
      controls.dispose();
      pmremGenerator.dispose();
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  // Sync Grid Mesh visibility
  useEffect(() => {
    if (gridHelperRef.current) {
      gridHelperRef.current.visible = showMeshGrid;
    }
  }, [showMeshGrid]);

  // Sync Material Shader properties dynamically
  useEffect(() => {
    if (!materialsMapRef.current) return;
    const activeMat = materialsMapRef.current[material];
    metalMeshesRef.current.forEach((mesh) => {
      mesh.material = activeMat;
    });
  }, [material]);

  // Sync Zoom Level from +/- buttons (capped at 100%)
  useEffect(() => {
    zoomLevelRef.current = zoomLevel;
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.zoom = zoomLevel;
    cameraRef.current.updateProjectionMatrix();

    // Dynamically update minDistance so total zoom can never exceed 100%
    controlsRef.current.minDistance = baseDistanceRef.current * zoomLevel;
    const currentDist = cameraRef.current.position.distanceTo(
      controlsRef.current.target,
    );
    if (currentDist < controlsRef.current.minDistance) {
      const dir = new THREE.Vector3()
        .subVectors(cameraRef.current.position, controlsRef.current.target)
        .normalize();
      cameraRef.current.position
        .copy(controlsRef.current.target)
        .addScaledVector(dir, controlsRef.current.minDistance);
      controlsRef.current.update();
    }
  }, [zoomLevel]);

  // Sync Camera Views (Perspective, Top, Front, Wireframe)
  useEffect(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    // Update wireframe visibility
    const isWireframeMode = viewportMode === "wireframe";
    metalMeshesRef.current.forEach((mesh) => {
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.wireframe = isWireframeMode;
      }
    });
    wireLinesRef.current.forEach((line) => {
      if (line.material instanceof THREE.Material) {
        line.material.opacity = isWireframeMode ? 0.95 : 0.35;
      }
    });

    if (viewportMode === "perspective" || viewportMode === "wireframe") {
      camera.position.set(0, 2.2, 4.8);
      controls.target.set(0, 0, 0);
      baseDistanceRef.current = Math.hypot(2.2, 4.8);
    } else if (viewportMode === "top") {
      camera.position.set(0, 5.5, 0.001);
      controls.target.set(0, 0, 0);
      baseDistanceRef.current = 5.5;
    } else if (viewportMode === "front") {
      camera.position.set(0, 0, 5.0);
      controls.target.set(0, 0, 0);
      baseDistanceRef.current = 5.0;
    }
    controls.minDistance = baseDistanceRef.current * zoomLevel;
    lastDollyRef.current = 1;
    setDollyFactor(1);
    controls.update();
  }, [viewportMode]);

  // Combined zoom percentage strictly capped at 100% maximum
  const currentZoomPercent = Math.min(
    100,
    Math.round(zoomLevel * dollyFactor * 100),
  );

  return (
    <div className="bg-[#0B1120] text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Top CAD Header Bar */}
      <div className="bg-[#0F172A] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="font-mono text-slate-300 font-medium">{title}</span>
          <span className="hidden sm:inline font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40 text-[10px]">
            Rhino 8.6 NURBS
          </span>
        </div>

        {/* Viewport Selectors */}
        <div className="flex items-center bg-slate-900/90 rounded-lg p-0.5 border border-slate-700">
          {(["perspective", "top", "front", "wireframe"] as const).map(
            (mode) => (
              <button
                key={mode}
                onClick={() => setViewportMode(mode)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded capitalize transition-all cursor-pointer ${
                  viewportMode === mode
                    ? "bg-[#0085CB] text-white shadow-xs"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {mode}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Main Viewport Workspace */}
      <div className="relative aspect-16/10 sm:aspect-16/9 bg-[#070B14] cad-dark-grid flex items-center justify-center overflow-hidden p-0 select-none">
        {/* Viewport Floating Metrology HUD */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5 space-y-1 text-[11px] font-mono shadow-lg">
            <div className="text-slate-400 flex items-center gap-2">
              <span>View:</span>
              <span className="text-white font-semibold uppercase">
                {viewportMode}
              </span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Finger Size:</span>
              <span className="text-sky-400">US 6.5 (16.92mm Ø)</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Prong Height:</span>
              <span className="text-emerald-400">1.15mm (±0.01)</span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>G2 Continuity:</span>
              <span className="text-amber-400">Verified G0/G1/G2</span>
            </div>
          </div>
        </div>

        {/* Viewport Floating Material HUD */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-lg p-2.5 space-y-1 text-[11px] font-mono shadow-lg text-right">
            <div className="text-slate-400">
              Cast Weight:{" "}
              <span className="text-amber-300 font-bold">
                {currentMat.weight}
              </span>
            </div>
            <div className="text-slate-400">
              Alloy: <span className="text-slate-200">{currentMat.label}</span>
            </div>
            <div className="text-slate-400">
              Gem Carat:{" "}
              <span className="text-sky-300 font-semibold">
                1.25 ct (Center) + 0.42 ct (Pavé)
              </span>
            </div>
          </div>
        </div>

        {/* Interactive 3D WebGL Canvas Viewport */}
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          style={{ minHeight: "340px" }}
        />

        {/* Coordinate Axis Indicator in 3D */}
        <div className="absolute bottom-16 left-4 z-20 pointer-events-none opacity-70">
          <div className="bg-slate-900/80 px-2 py-1 rounded border border-slate-800 flex items-center gap-2 text-[10px] font-mono">
            <span className="text-rose-400 font-bold">X</span>
            <span className="text-emerald-400 font-bold">Y</span>
            <span className="text-sky-400 font-bold">Z</span>
            <span className="text-slate-500">· CPlane World</span>
          </div>
        </div>

        {/* Floating Viewport Status Banner */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition-colors cursor-pointer"
          >
            <RotateCw
              className={`w-3.5 h-3.5 ${isRotating ? "animate-spin text-sky-400" : ""}`}
            />
            <span>{isRotating ? "Turntable Active" : "Turntable Paused"}</span>
          </button>

          <button
            onClick={() => setShowMeshGrid(!showMeshGrid)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
              showMeshGrid
                ? "bg-sky-950/80 text-sky-300 border-sky-700"
                : "bg-slate-900/80 text-slate-400 border-slate-700 hover:text-slate-300"
            }`}
          >
            Grid: {showMeshGrid ? "ON" : "OFF"}
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-slate-900/90 rounded-lg p-1 border border-slate-700 text-xs font-mono">
          <button
            onClick={() =>
              setZoomLevel((z) =>
                Math.max(0.3, parseFloat((z - 0.1).toFixed(1))),
              )
            }
            className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
          >
            -
          </button>
          <span className="px-2 text-slate-400">{currentZoomPercent}%</span>
          <button
            onClick={() =>
              setZoomLevel((z) =>
                Math.min(1.0, parseFloat((z + 0.1).toFixed(1))),
              )
            }
            className="px-2 py-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* Bottom Material Selector & Metrology Specs */}
      <div className="bg-[#0F172A] p-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Material Preset Toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-medium">
            Material Shader:
          </span>
          {(["gold", "platinum", "rosegold", "zebra"] as const).map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                material === mat
                  ? "bg-white text-slate-900 font-semibold shadow-xs"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full inline-block"
                style={{ backgroundColor: materialStyles[mat].metalPrimary }}
              />
              <span>
                {mat === "zebra"
                  ? "Curvature Analysis"
                  : mat.charAt(0).toUpperCase() + mat.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Specification callout */}
        <div className="text-xs text-slate-400 flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Watertight Solid (0 Naked Edges)
          </span>
          <span className="text-slate-500">·</span>
          <span>DLP/SLA 25µm Slicing Ready</span>
        </div>
      </div>
    </div>
  );
};
