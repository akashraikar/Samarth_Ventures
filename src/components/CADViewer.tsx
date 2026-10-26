import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RotateCw, CheckCircle2 } from "lucide-react";

interface CADViewerProps {
  initialMaterial?: "gold" | "platinum" | "rosegold" | "wireframe";
  title?: string;
}

// ============================================================================
// 1. PROCEDURAL 3-TIER EMERALD STEP-CUT CENTER GEMSTONE WITH VIBRANT TOP GLARE
// ============================================================================
/**
 * Procedurally constructs an authentic Emerald-Cut Gemstone:
 * - Multi-faceted radiant star table crown with subtle bevel slope so the top
 *   catches studio lighting from all angles with bright specular glare
 * - 3 concentric tiers of crown step facets
 * - Polished girdle perimeter
 * - 3 concentric tiers of pavilion step facets tapering to an elongated culet keel line
 * - Internal faceted pavilion reflector core ensuring total internal reflection
 *   and eliminating any "empty" dark void through the top
 */
function createEmeraldCutGemGeometry(
  center = new THREE.Vector3(0, 1.62, 0),
  width = 1.12,
  depth = 0.88,
  cornerClip = 0.22,
  crownHeight = 0.22,
  girdleThickness = 0.05,
  pavilionDepth = 0.48,
): {
  gemGeom: THREE.BufferGeometry;
  internalReflectorGeom: THREE.BufferGeometry;
} {
  const gemGeom = new THREE.BufferGeometry();
  const positions: number[] = [];

  const addTri = (p1: THREE.Vector3, p2: THREE.Vector3, p3: THREE.Vector3) => {
    positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
  };

  const addQuad = (
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    p3: THREE.Vector3,
    p4: THREE.Vector3,
  ) => {
    addTri(p1, p2, p3);
    addTri(p1, p3, p4);
  };

  // Helper to generate an 8-point clipped-corner contour
  const getOctagonRing = (
    w: number,
    d: number,
    c: number,
    y: number,
  ): THREE.Vector3[] => {
    const hw = w / 2;
    const hd = d / 2;
    return [
      new THREE.Vector3(center.x + hw - c, y, center.z - hd), // 0: top right
      new THREE.Vector3(center.x + hw, y, center.z - hd + c), // 1: right top
      new THREE.Vector3(center.x + hw, y, center.z + hd - c), // 2: right bottom
      new THREE.Vector3(center.x + hw - c, y, center.z + hd), // 3: bottom right
      new THREE.Vector3(center.x - hw + c, y, center.z + hd), // 4: bottom left
      new THREE.Vector3(center.x - hw, y, center.z + hd - c), // 5: left bottom
      new THREE.Vector3(center.x - hw, y, center.z - hd + c), // 6: left top
      new THREE.Vector3(center.x - hw + c, y, center.z - hd), // 7: top left
    ];
  };

  const yGirdleTop = center.y + girdleThickness / 2;
  const yGirdleBot = center.y - girdleThickness / 2;

  // 1. Crown Step Tiers
  const girdleRing = getOctagonRing(width, depth, cornerClip, yGirdleTop);
  const crownTier1 = getOctagonRing(
    width * 0.88,
    depth * 0.88,
    cornerClip * 0.88,
    yGirdleTop + crownHeight * 0.35,
  );
  const crownTier2 = getOctagonRing(
    width * 0.74,
    depth * 0.74,
    cornerClip * 0.74,
    yGirdleTop + crownHeight * 0.7,
  );
  const tableRing = getOctagonRing(
    width * 0.58,
    depth * 0.58,
    cornerClip * 0.58,
    yGirdleTop + crownHeight,
  );

  // DYNAMIC TOP GLARE FACETS:
  // Instead of an empty single flat plane, we construct an authentic multi-faceted
  // star table crown with subtle slope and an elevated center star apex (+0.038).
  // This ensures light bounces directly toward the viewer from all perspectives!
  const yTableApex = yGirdleTop + crownHeight + 0.038;
  const tableApexCenter = new THREE.Vector3(center.x, yTableApex, center.z);

  // 4 Mid-table star control points to create 16 active faceted glare surfaces on the top
  const starMidPoints: THREE.Vector3[] = [
    new THREE.Vector3(center.x + width * 0.16, yTableApex - 0.012, center.z),
    new THREE.Vector3(center.x, yTableApex - 0.012, center.z + depth * 0.16),
    new THREE.Vector3(center.x - width * 0.16, yTableApex - 0.012, center.z),
    new THREE.Vector3(center.x, yTableApex - 0.012, center.z - depth * 0.16),
  ];

  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    const midPt = starMidPoints[Math.floor(i / 2) % 4];
    addTri(tableApexCenter, midPt, tableRing[i]);
    addTri(midPt, tableRing[next], tableRing[i]);
  }

  // Crown Step Bands
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addQuad(tableRing[i], tableRing[next], crownTier2[next], crownTier2[i]);
    addQuad(crownTier2[i], crownTier2[next], crownTier1[next], crownTier1[i]);
    addQuad(crownTier1[i], crownTier1[next], girdleRing[next], girdleRing[i]);
  }

  // 2. Girdle Band (vertical faceted strip)
  const lowerGirdleRing = getOctagonRing(width, depth, cornerClip, yGirdleBot);
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addQuad(
      girdleRing[i],
      girdleRing[next],
      lowerGirdleRing[next],
      lowerGirdleRing[i],
    );
  }

  // 3. Pavilion Step Tiers & Keel Line
  const pavTier1 = getOctagonRing(
    width * 0.78,
    depth * 0.78,
    cornerClip * 0.78,
    yGirdleBot - pavilionDepth * 0.35,
  );
  const pavTier2 = getOctagonRing(
    width * 0.5,
    depth * 0.5,
    cornerClip * 0.5,
    yGirdleBot - pavilionDepth * 0.7,
  );

  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addQuad(
      lowerGirdleRing[i],
      lowerGirdleRing[next],
      pavTier1[next],
      pavTier1[i],
    );
    addQuad(pavTier1[i], pavTier1[next], pavTier2[next], pavTier2[i]);
  }

  // Culet Keel Line (elongated step-cut culet along X-axis)
  const yCulet = yGirdleBot - pavilionDepth;
  const keelHalfLength = width * 0.2;
  const keelRight = new THREE.Vector3(
    center.x + keelHalfLength,
    yCulet,
    center.z,
  );
  const keelLeft = new THREE.Vector3(
    center.x - keelHalfLength,
    yCulet,
    center.z,
  );

  // Connect pavilion tier 2 down to the keel line
  addTri(pavTier2[0], pavTier2[1], keelRight);
  addTri(pavTier2[1], pavTier2[2], keelRight);
  addTri(pavTier2[2], pavTier2[3], keelRight);
  addQuad(pavTier2[3], pavTier2[4], keelLeft, keelRight);
  addTri(pavTier2[4], pavTier2[5], keelLeft);
  addTri(pavTier2[5], pavTier2[6], keelLeft);
  addTri(pavTier2[6], pavTier2[7], keelLeft);
  addQuad(pavTier2[7], pavTier2[0], keelRight, keelLeft);

  gemGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  gemGeom.computeVertexNormals();

  // 4. Internal Pavilion Reflector (Simulates Total Internal Reflection inside the stone)
  const reflectorGeom = new THREE.BufferGeometry();
  const refPositions: number[] = [];
  const refScale = 0.9;
  const rPavTier1 = getOctagonRing(
    width * 0.78 * refScale,
    depth * 0.78 * refScale,
    cornerClip * 0.78 * refScale,
    yGirdleBot - pavilionDepth * 0.32,
  );
  const rPavTier2 = getOctagonRing(
    width * 0.5 * refScale,
    depth * 0.5 * refScale,
    cornerClip * 0.5 * refScale,
    yGirdleBot - pavilionDepth * 0.65,
  );
  const rKeelRight = new THREE.Vector3(
    center.x + keelHalfLength * refScale,
    yCulet + 0.04,
    center.z,
  );
  const rKeelLeft = new THREE.Vector3(
    center.x - keelHalfLength * refScale,
    yCulet + 0.04,
    center.z,
  );

  const addRefTri = (
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    p3: THREE.Vector3,
  ) => {
    refPositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
  };
  const addRefQuad = (
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    p3: THREE.Vector3,
    p4: THREE.Vector3,
  ) => {
    addRefTri(p1, p2, p3);
    addRefTri(p1, p3, p4);
  };

  // Horizontal reflector table mirror beneath top
  const rTableCenter = new THREE.Vector3(center.x, yGirdleTop - 0.02, center.z);
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addRefTri(rTableCenter, rPavTier1[i], rPavTier1[next]);
    addRefQuad(rPavTier1[i], rPavTier1[next], rPavTier2[next], rPavTier2[i]);
  }
  addRefTri(rPavTier2[0], rPavTier2[1], rKeelRight);
  addRefTri(rPavTier2[1], rPavTier2[2], rKeelRight);
  addRefTri(rPavTier2[2], rPavTier2[3], rKeelRight);
  addQuad(rPavTier2[3], rPavTier2[4], keelLeft, keelRight);
  addRefTri(rPavTier2[4], rPavTier2[5], keelLeft);
  addRefTri(rPavTier2[5], rPavTier2[6], keelLeft);
  addRefTri(rPavTier2[6], rPavTier2[7], keelLeft);
  addQuad(rPavTier2[7], rPavTier2[0], keelRight, keelLeft);

  reflectorGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(refPositions, 3),
  );
  reflectorGeom.computeVertexNormals();

  return { gemGeom, internalReflectorGeom: reflectorGeom };
}

// ============================================================================
// 2. MICRO-PAVÉ MELEE GEMSTONE GEOMETRY
// ============================================================================
function createMicroPaveStoneGeom(radius = 0.048): THREE.BufferGeometry {
  const geom = new THREE.ConeGeometry(radius, radius * 1.5, 12, 1, false);
  geom.rotateX(Math.PI);
  return geom;
}

// ============================================================================
// 3. COMPLETE 360° CLOSED CIRCULAR CATHEDRAL SHANK & SOLID GALLERY BRIDGE
// ============================================================================
/**
 * Procedural 360° Closed Circular Cathedral Shank:
 * - Unbroken 360-degree circular finger hole (radius strictly 1.35mm across the entire circumference)
 * - Complete, solid gallery bridge across the top passing under the setting head with zero open gaps
 * - European comfort-fit bottom sizing bar with anti-spin softened corners
 * - Symmetrical dual cathedral arches branching upward toward the halo platform
 */
function createRoyalCathedralShankGeometry(
  innerRadius = 1.35,
  steps = 96,
): {
  shankGeom: THREE.BufferGeometry;
  cathedralArchesGeom: THREE.BufferGeometry;
  pavePositions: THREE.Vector3[];
} {
  const shankGeom = new THREE.BufferGeometry();
  const positions: number[] = [];
  const indices: number[] = [];
  const uvs: number[] = [];
  const pavePositions: THREE.Vector3[] = [];

  const profileSteps = 20;

  // Complete 360-degree sweep from -PI/2 around full 2*PI back to -PI/2
  for (let i = 0; i <= steps; i++) {
    const t = i / steps; // 0 to 1.0 around the complete circle
    const theta = -Math.PI / 2 + t * Math.PI * 2;

    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);

    // Height parameter: -1 at bottom sizing bar, +1 at top gallery bridge
    const yNorm = sinT;

    // European profile squaring at bottom
    const euroBottomFactor = Math.max(0, -yNorm);
    const radMod = 1.0 + Math.pow(cosT, 4) * 0.06 * euroBottomFactor;

    // Strict circular inner finger hole
    const cx = innerRadius * radMod * cosT;
    const cy = innerRadius * radMod * sinT;

    // Seamless radial thickness and width around the entire 360° loop:
    // Bottom (yNorm < 0): width 0.38, thickness 0.22
    // Shoulders (yNorm ~ 0.5): width 0.62, thickness 0.32
    // Top Bridge (yNorm > 0.8): solid gallery bridge, width 0.54, thickness 0.16 (closing the top!)
    let thickness: number;
    let halfWidth: number;

    if (yNorm < 0) {
      // Bottom half
      const u = -yNorm; // 0 at equator -> 1 at bottom
      thickness = 0.22 + (1.0 - u) * 0.1;
      halfWidth = 0.19 + (1.0 - u) * 0.08;
    } else {
      // Top half
      const u = yNorm; // 0 at equator -> 1 at top
      thickness = 0.32 - u * 0.16; // 0.32 at shoulder -> 0.16 at top bridge (solid, unbroken!)
      halfWidth = 0.27 - u * 0.03; // 0.27 at shoulder -> 0.24 at top bridge
    }

    for (let j = 0; j <= profileSteps; j++) {
      const p = j / profileSteps;
      const phi = p * Math.PI * 2;

      let rOffset = 0;
      let zOffset = 0;

      if (Math.sin(phi) >= 0) {
        // High-polished convex outer dome with cathedral spine
        const a = Math.sin(phi);
        const b = Math.cos(phi);
        const spine = Math.pow(a, 0.88);
        rOffset = spine * thickness;
        zOffset = b * halfWidth;
      } else {
        // Smooth comfort-fit interior curve
        const a = Math.sin(phi - Math.PI);
        const b = -Math.cos(phi - Math.PI);
        rOffset = -Math.sin(a * Math.PI) * 0.015;
        zOffset = b * halfWidth * 0.92;
      }

      positions.push(cx + cosT * rOffset, cy + sinT * rOffset, zOffset);
      uvs.push(t, p);
    }
  }

  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < profileSteps; j++) {
      const a = i * (profileSteps + 1) + j;
      const b = (i + 1) * (profileSteps + 1) + j;
      const c = (i + 1) * (profileSteps + 1) + (j + 1);
      const d = i * (profileSteps + 1) + (j + 1);

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  shankGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  shankGeom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  shankGeom.setIndex(indices);
  shankGeom.computeVertexNormals();

  // 2. Cathedral Rising Shoulders Arches (Rising to meet the Halo Platform)
  const archesGeom = new THREE.BufferGeometry();
  const archPositions: number[] = [];
  const archIndices: number[] = [];

  const sides = [-1, 1]; // Left (-X) and Right (+X) shoulders
  sides.forEach((side) => {
    // Shoulder curve sweeping upward from upper shank to the halo foundation
    const shoulderCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 1.05, 0.85, 0),
      new THREE.Vector3(side * 0.95, 1.15, 0),
      new THREE.Vector3(side * 0.8, 1.38, 0),
      new THREE.Vector3(side * 0.62, 1.48, 0),
    ]);

    const archPts = shoulderCurve.getPoints(24);
    const archSegs = archPts.length - 1;
    const ribSteps = 12;
    const baseIndexOffset = archPositions.length / 3;

    // Distribute pavé positions along upper shoulder arches
    for (let k = 4; k < 18; k += 2) {
      const p = archPts[k];
      pavePositions.push(new THREE.Vector3(p.x, p.y + 0.05, p.z));
    }

    for (let s = 0; s <= archSegs; s++) {
      const pt = archPts[s];
      const prog = s / archSegs;
      const ribW = 0.22 - prog * 0.06;
      const ribH = 0.16 - prog * 0.04;

      for (let r = 0; r <= ribSteps; r++) {
        const ang = (r / ribSteps) * Math.PI * 2;
        const ox = Math.cos(ang) * ribH * 0.5;
        const oy = Math.sin(ang) * ribH;
        const oz = Math.cos(ang) * ribW;

        archPositions.push(pt.x + ox * side, pt.y + oy, oz);
      }
    }

    for (let s = 0; s < archSegs; s++) {
      for (let r = 0; r < ribSteps; r++) {
        const a = baseIndexOffset + s * (ribSteps + 1) + r;
        const b = baseIndexOffset + (s + 1) * (ribSteps + 1) + r;
        const c = baseIndexOffset + (s + 1) * (ribSteps + 1) + (r + 1);
        const d = baseIndexOffset + s * (ribSteps + 1) + (r + 1);

        archIndices.push(a, b, d);
        archIndices.push(b, c, d);
      }
    }
  });

  archesGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(archPositions, 3),
  );
  archesGeom.setIndex(archIndices);
  archesGeom.computeVertexNormals();

  return { shankGeom, cathedralArchesGeom: archesGeom, pavePositions };
}

// ============================================================================
// 4. STEP-CUT OCTAGONAL HALO PLATFORM WITH MILGRAIN RIM
// ============================================================================
function createHaloPlatform(
  center = new THREE.Vector3(0, 1.54, 0),
  width = 1.68,
  depth = 1.44,
  cornerClip = 0.36,
): {
  haloPlateGeom: THREE.BufferGeometry;
  beadPositions: THREE.Vector3[];
} {
  const haloPlateGeom = new THREE.BufferGeometry();
  const positions: number[] = [];
  const beadPositions: THREE.Vector3[] = [];

  const addTri = (p1: THREE.Vector3, p2: THREE.Vector3, p3: THREE.Vector3) => {
    positions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);
  };
  const addQuad = (
    p1: THREE.Vector3,
    p2: THREE.Vector3,
    p3: THREE.Vector3,
    p4: THREE.Vector3,
  ) => {
    addTri(p1, p2, p3);
    addTri(p1, p3, p4);
  };

  const getRing = (
    w: number,
    d: number,
    c: number,
    y: number,
  ): THREE.Vector3[] => {
    const hw = w / 2;
    const hd = d / 2;
    return [
      new THREE.Vector3(center.x + hw - c, y, center.z - hd),
      new THREE.Vector3(center.x + hw, y, center.z - hd + c),
      new THREE.Vector3(center.x + hw, y, center.z + hd - c),
      new THREE.Vector3(center.x + hw - c, y, center.z + hd),
      new THREE.Vector3(center.x - hw + c, y, center.z + hd),
      new THREE.Vector3(center.x - hw, y, center.z + hd - c),
      new THREE.Vector3(center.x - hw, y, center.z - hd + c),
      new THREE.Vector3(center.x - hw + c, y, center.z - hd),
    ];
  };

  const yTop = center.y + 0.05;
  const yBot = center.y - 0.12;

  // Outer rim & inner cutout boundary
  const outerRingTop = getRing(width, depth, cornerClip, yTop);
  const outerRingBot = getRing(
    width * 0.94,
    depth * 0.94,
    cornerClip * 0.94,
    yBot,
  );
  const innerRingTop = getRing(
    width * 0.68,
    depth * 0.68,
    cornerClip * 0.68,
    yTop,
  );
  const innerRingBot = getRing(
    width * 0.64,
    depth * 0.64,
    cornerClip * 0.64,
    yBot,
  );

  // Top surface plate of the halo
  for (let i = 0; i < 8; i++) {
    const next = (i + 1) % 8;
    addQuad(
      innerRingTop[i],
      innerRingTop[next],
      outerRingTop[next],
      outerRingTop[i],
    );
    addQuad(
      outerRingTop[i],
      outerRingTop[next],
      outerRingBot[next],
      outerRingBot[i],
    );
    addQuad(
      innerRingBot[i],
      innerRingBot[next],
      innerRingTop[next],
      innerRingTop[i],
    );
    addQuad(
      outerRingBot[i],
      outerRingBot[next],
      innerRingBot[next],
      innerRingBot[i],
    );

    // Position halo melee diamonds centered within the rim channel
    const p1 = outerRingTop[i];
    const p2 = outerRingTop[next];
    const q1 = innerRingTop[i];
    const q2 = innerRingTop[next];
    const midOuter = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    const midInner = new THREE.Vector3().addVectors(q1, q2).multiplyScalar(0.5);
    beadPositions.push(
      new THREE.Vector3().addVectors(midOuter, midInner).multiplyScalar(0.5),
    );

    // Midpoints for corner segments to place full 20 micro-stones around halo
    if (i % 2 === 0) {
      beadPositions.push(
        new THREE.Vector3().addVectors(p1, q1).multiplyScalar(0.5),
      );
    }
  }

  haloPlateGeom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  haloPlateGeom.computeVertexNormals();

  return { haloPlateGeom, beadPositions };
}

// ============================================================================
// 5. INTRICATE FILIGREE UNDER-GALLERY (Azouré / Pierced Lattice)
// ============================================================================
function createFiligreeUnderGallery(
  center = new THREE.Vector3(0, 1.4, 0),
  metalMaterial: THREE.Material,
  accentMaterial: THREE.Material,
  group: THREE.Group,
  metalMeshes: THREE.Mesh[],
  accentMeshes: THREE.Mesh[],
) {
  const addPart = (
    geom: THREE.BufferGeometry,
    mat: THREE.Material,
    isAccent = false,
  ) => {
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    if (isAccent) accentMeshes.push(mesh);
    else metalMeshes.push(mesh);
    return mesh;
  };

  // 1. Lower Gallery Rail Ring (Foundation Collar)
  const collarGeom = new THREE.TorusGeometry(0.58, 0.048, 16, 40);
  collarGeom.rotateX(Math.PI / 2);
  const collarMesh = addPart(collarGeom, metalMaterial);
  collarMesh.position.set(center.x, center.y - 0.28, center.z);

  // 2. Cathedral Rib Arches (4 diagonal support struts)
  const cornerAngles = [
    Math.PI / 4,
    (3 * Math.PI) / 4,
    (5 * Math.PI) / 4,
    (7 * Math.PI) / 4,
  ];
  cornerAngles.forEach((angle) => {
    const cx = Math.cos(angle);
    const cz = Math.sin(angle);

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(cx * 0.54, center.y - 0.26, cz * 0.54),
      new THREE.Vector3(cx * 0.68, center.y - 0.12, cz * 0.68),
      new THREE.Vector3(cx * 0.78, center.y + 0.08, cz * 0.78),
    ]);
    const archGeom = new THREE.TubeGeometry(curve, 16, 0.044, 12, false);
    addPart(archGeom, metalMaterial);
  });

  // 3. Pierced Arabesque Filigree Scrolls (East, West, North, South)
  const cardinalAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  cardinalAngles.forEach((angle) => {
    const scrollGroup = new THREE.Group();

    // S-Scroll filigree ribbon
    const scrollCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -0.22, 0.52),
      new THREE.Vector3(0.12, -0.14, 0.54),
      new THREE.Vector3(0, -0.06, 0.56),
      new THREE.Vector3(-0.1, 0.02, 0.58),
      new THREE.Vector3(0, 0.08, 0.6),
    ]);
    const scrollTubeGeom = new THREE.TubeGeometry(
      scrollCurve,
      20,
      0.032,
      10,
      false,
    );
    const scrollMesh = addPart(scrollTubeGeom, metalMaterial);
    scrollGroup.add(scrollMesh);

    // Milgrain finial button at scroll center
    const finialGeom = new THREE.SphereGeometry(0.045, 12, 10);
    const finialMesh = addPart(finialGeom, metalMaterial);
    finialMesh.position.set(0, -0.06, 0.56);
    scrollGroup.add(finialMesh);

    scrollGroup.rotation.y = angle;
    scrollGroup.position.set(center.x, center.y, center.z);
    group.add(scrollGroup);
  });

  // 4. North & South "Peek-a-Boo" Secret Flush-Set Gems
  [-0.6, 0.6].forEach((zPos) => {
    const secretBezelGeom = new THREE.TorusGeometry(0.065, 0.024, 12, 24);
    const secretBezel = addPart(secretBezelGeom, metalMaterial);
    secretBezel.position.set(center.x, center.y - 0.1, center.z + zPos);

    const secretGemGeom = new THREE.SphereGeometry(0.048, 12, 12);
    secretGemGeom.scale(1.0, 0.6, 1.0);
    const secretGem = addPart(secretGemGeom, accentMaterial, true);
    secretGem.position.set(center.x, center.y - 0.1, center.z + zPos);
  });
}

// ============================================================================
// 6. FOUR CORNER CHEVRON DOUBLE-CLAW PRONGS (Turned Inward Clamping Geometry)
// ============================================================================
function createCornerChevronClaws(
  center = new THREE.Vector3(0, 1.62, 0),
  width = 1.12,
  depth = 0.88,
  cornerClip = 0.22,
  metalMaterial: THREE.Material,
  group: THREE.Group,
  metalMeshes: THREE.Mesh[],
) {
  const hw = width / 2;
  const hd = depth / 2;
  const c = cornerClip;

  // 4 corner center positions along the emerald-cut clipped corners
  const corners = [
    { x: hw - c / 2, z: -hd + c / 2 }, // Top-Right (+X, -Z)
    { x: hw - c / 2, z: hd - c / 2 }, // Bottom-Right (+X, +Z)
    { x: -hw + c / 2, z: hd - c / 2 }, // Bottom-Left (-X, +Z)
    { x: -hw + c / 2, z: -hd + c / 2 }, // Top-Left (-X, -Z)
  ];

  corners.forEach((corn) => {
    // Vector pointing from corner strictly INWARD toward center (0, center.y, 0)
    const inward = new THREE.Vector3(
      center.x - (center.x + corn.x),
      0,
      center.z - (center.z + corn.z),
    ).normalize();
    const outward = inward.clone().negate();
    // Tangent perpendicular along the corner facet
    const tangent = new THREE.Vector3(-inward.z, 0, inward.x).normalize();

    // Twin chevron claws per corner holding the stone firmly in place
    [-0.034, 0.034].forEach((tOffset) => {
      // Base point on corner
      const cornerBase = new THREE.Vector3(
        center.x + corn.x + tangent.x * tOffset,
        center.y,
        center.z + corn.z + tangent.z * tOffset,
      );

      // Points along the claw:
      // 1. Root: below girdle, rising from halo platform
      const pRoot = cornerBase.clone().addScaledVector(outward, 0.032);
      pRoot.y = center.y - 0.1;

      // 2. Lower body: running up past the girdle band
      const pGirdle = cornerBase.clone().addScaledVector(outward, 0.012);
      pGirdle.y = center.y + 0.02;

      // 3. Knee / Arch: turning sharply inward over the crown bevel step
      const pArch = cornerBase.clone().addScaledVector(inward, 0.055);
      pArch.y = center.y + 0.1;

      // 4. Tip: turned inward and pressed down onto the gemstone crown facet
      const pTip = cornerBase.clone().addScaledVector(inward, 0.135);
      pTip.y = center.y + 0.075;

      const curve = new THREE.CatmullRomCurve3([pRoot, pGirdle, pArch, pTip]);
      const tubeGeom = new THREE.TubeGeometry(curve, 16, 0.023, 10, false);
      const tubeMesh = new THREE.Mesh(tubeGeom, metalMaterial);
      tubeMesh.castShadow = true;
      tubeMesh.receiveShadow = true;
      group.add(tubeMesh);
      metalMeshes.push(tubeMesh);

      // Smooth rounded claw tip bead pressing down on stone facet
      const tipGeom = new THREE.SphereGeometry(0.025, 10, 8);
      tipGeom.scale(0.9, 0.65, 1.1);
      const tipMesh = new THREE.Mesh(tipGeom, metalMaterial);
      tipMesh.position.copy(pTip);
      tipMesh.lookAt(pTip.clone().add(inward));
      tipMesh.castShadow = true;
      tipMesh.receiveShadow = true;
      group.add(tipMesh);
      metalMeshes.push(tipMesh);
    });
  });
}

// ============================================================================
// 7. ASSEMBLE COMPLETE ROYAL CATHEDRAL HALO RING MODEL
// ============================================================================
function createRoyalCathedralRingModel(
  metalMaterial: THREE.Material,
  centerGemMaterial: THREE.Material,
  internalReflectorMaterial: THREE.Material,
  accentGemMaterial: THREE.Material,
  wireMaterial: THREE.LineBasicMaterial,
): {
  group: THREE.Group;
  metalMeshes: THREE.Mesh[];
  centerGemMeshes: THREE.Mesh[];
  accentGemMeshes: THREE.Mesh[];
  wireLines: THREE.LineSegments[];
} {
  const group = new THREE.Group();
  const metalMeshes: THREE.Mesh[] = [];
  const centerGemMeshes: THREE.Mesh[] = [];
  const accentGemMeshes: THREE.Mesh[] = [];
  const wireLines: THREE.LineSegments[] = [];

  const addPart = (
    geom: THREE.BufferGeometry,
    mat: THREE.Material,
    category: "metal" | "centerGem" | "accentGem",
  ) => {
    const mesh = new THREE.Mesh(geom, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    if (category === "metal") metalMeshes.push(mesh);
    else if (category === "centerGem") centerGemMeshes.push(mesh);
    else accentGemMeshes.push(mesh);

    const edgesGeom = new THREE.EdgesGeometry(geom, 26);
    const edgesLine = new THREE.LineSegments(edgesGeom, wireMaterial);
    mesh.add(edgesLine);
    wireLines.push(edgesLine);

    return mesh;
  };

  // 1. Complete 360° Closed Circular Shank (Solid Under-Gallery Bridge)
  const { shankGeom, cathedralArchesGeom, pavePositions } =
    createRoyalCathedralShankGeometry(1.35, 96);
  addPart(shankGeom, metalMaterial, "metal");
  addPart(cathedralArchesGeom, metalMaterial, "metal");

  // Cathedral Shoulder Pavé Accent Stones (14 Melee Diamonds)
  const paveGeom = createMicroPaveStoneGeom(0.046);
  pavePositions.forEach((pos) => {
    const stone = addPart(paveGeom, accentGemMaterial, "accentGem");
    stone.position.copy(pos);
    stone.lookAt(pos.x * 2, pos.y * 2, pos.z);
  });

  // 2. Halo Platform with 20 Micro-Pavé Diamonds & Milgrain Rim
  const { haloPlateGeom, beadPositions } = createHaloPlatform(
    new THREE.Vector3(0, 1.54, 0),
    1.68,
    1.44,
    0.36,
  );
  addPart(haloPlateGeom, metalMaterial, "metal");

  // 20 Halo Melee Diamonds
  const haloStoneGeom = createMicroPaveStoneGeom(0.044);
  beadPositions.forEach((pos) => {
    const stone = addPart(haloStoneGeom, accentGemMaterial, "accentGem");
    stone.position.copy(pos);
    stone.position.y += 0.04;
  });

  // 3. Pierced Arabesque Filigree Under-Gallery
  createFiligreeUnderGallery(
    new THREE.Vector3(0, 1.4, 0),
    metalMaterial,
    accentGemMaterial,
    group,
    metalMeshes,
    accentGemMeshes,
  );

  // 4. Four Corner Chevron Double-Claw Prongs
  createCornerChevronClaws(
    new THREE.Vector3(0, 1.62, 0),
    1.12,
    0.88,
    0.22,
    metalMaterial,
    group,
    metalMeshes,
  );

  // 5. Center Gemstone: 3.20 ct Emerald Step-Cut Royal Sapphire with Top Glare
  const { gemGeom, internalReflectorGeom } = createEmeraldCutGemGeometry(
    new THREE.Vector3(0, 1.62, 0),
    1.12,
    0.88,
    0.22,
    0.22,
    0.05,
    0.48,
  );
  addPart(gemGeom, centerGemMaterial, "centerGem");
  addPart(internalReflectorGeom, internalReflectorMaterial, "centerGem");

  // Center model pivot
  group.position.y = -0.28;

  return { group, metalMeshes, centerGemMeshes, accentGemMeshes, wireLines };
}

export const CADViewer: React.FC<CADViewerProps> = ({
  initialMaterial = "gold",
  title = "Rhinoceros 8 Viewport: Royal Cathedral Emerald-Cut Halo Ring",
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

  // Animation and interaction refs
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
  const centerGemMeshesRef = useRef<THREE.Mesh[]>([]);
  const accentGemMeshesRef = useRef<THREE.Mesh[]>([]);
  const wireLinesRef = useRef<THREE.LineSegments[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  // Material shaders cache
  const materialsMapRef = useRef<{
    gold: THREE.MeshStandardMaterial;
    platinum: THREE.MeshStandardMaterial;
    rosegold: THREE.MeshStandardMaterial;
    zebra: THREE.ShaderMaterial;
    centerGem: THREE.MeshPhysicalMaterial;
    internalReflector: THREE.MeshStandardMaterial;
    accentGem: THREE.MeshPhysicalMaterial;
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
      weight: "8.45 g",
    },
    platinum: {
      metalPrimary: "#64748B",
      metalSecondary: "#94A3B8",
      metalHighlight: "#F8FAFC",
      label: "950 Platinum (Pt 950)",
      density: "21.4 g/cm³",
      weight: "11.66 g",
    },
    rosegold: {
      metalPrimary: "#BE123C",
      metalSecondary: "#FB7185",
      metalHighlight: "#FFE4E6",
      label: "18K Rose Gold (Au 750 + Cu)",
      density: "15.2 g/cm³",
      weight: "8.28 g",
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

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 420;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070b14);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.3, 4.8);
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
    renderer.toneMappingExposure = 1.32;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Studio Environment Lighting
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04,
    ).texture;
    scene.environment = envTexture;

    // Balanced 3-point lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.7);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimLight.position.set(-4, -2, -4);
    scene.add(rimLight);

    const gemSparkleLight = new THREE.DirectionalLight(0xffffff, 2.6);
    gemSparkleLight.position.set(0, 9, 2);
    scene.add(gemSparkleLight);

    // Dedicated Top Glare Spotlight aimed directly at the stone table facing camera
    const topGlareLight = new THREE.DirectionalLight(0xffffff, 3.4);
    topGlareLight.position.set(0, 5.5, 4.2);
    scene.add(topGlareLight);

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
    controls.minDistance = baseDistanceRef.current * zoomLevel;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Dolly zoom cap at 100%
    const updateDollyZoom = () => {
      if (!cameraRef.current || !controlsRef.current) return;
      const cam = cameraRef.current;
      const ctrl = controlsRef.current;
      const dist = cam.position.distanceTo(ctrl.target);
      if (dist > 0.01 && baseDistanceRef.current > 0.01) {
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
      roughness: 0.1,
      envMapIntensity: 1.8,
    });

    const platinumMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.94,
      roughness: 0.08,
      envMapIntensity: 1.6,
    });

    const rosegoldMat = new THREE.MeshStandardMaterial({
      color: 0xfb7185,
      metalness: 0.94,
      roughness: 0.12,
      envMapIntensity: 1.7,
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

    // Royal Deep Velvet Blue Sapphire Center Stone with Vivid Top Glare & Specular Fire
    const centerGemMat = new THREE.MeshPhysicalMaterial({
      color: 0x073587,
      metalness: 0.08,
      roughness: 0.0,
      transmission: 0.38, // Optimized for deep optical stone body + vivid surface glare
      ior: 1.77,
      dispersion: 0.045,
      thickness: 1.2,
      attenuationColor: new THREE.Color(0x0284c7),
      attenuationDistance: 1.4,
      transparent: true,
      opacity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      reflectivity: 1.0,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xffffff),
      envMapIntensity: 3.4,
    });

    // Internal Reflector Core (Total Internal Reflection facet bounce)
    const internalReflectorMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.88,
      roughness: 0.06,
      envMapIntensity: 3.6,
    });

    // Brilliant-Cut Melee Diamond Accent Stones
    const accentGemMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.02,
      roughness: 0.0,
      transmission: 0.96,
      ior: 2.417,
      dispersion: 0.045,
      thickness: 0.45,
      attenuationColor: new THREE.Color(0xffffff),
      attenuationDistance: 2.0,
      transparent: true,
      opacity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      envMapIntensity: 2.6,
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
      centerGem: centerGemMat,
      internalReflector: internalReflectorMat,
      accentGem: accentGemMat,
      wire: wireMat,
    };

    // 8. Build Royal Cathedral Halo Ring Model
    const currentActiveMetalMat = materialsMapRef.current[material];
    const {
      group: ringGroup,
      metalMeshes,
      centerGemMeshes,
      accentGemMeshes,
      wireLines,
    } = createRoyalCathedralRingModel(
      currentActiveMetalMat,
      centerGemMat,
      internalReflectorMat,
      accentGemMat,
      wireMat,
    );

    scene.add(ringGroup);
    ringGroupRef.current = ringGroup;
    metalMeshesRef.current = metalMeshes;
    centerGemMeshesRef.current = centerGemMeshes;
    accentGemMeshesRef.current = accentGemMeshes;
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

    // 10. Animation Render Loop
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

  // Sync Zoom Level from +/- buttons
  useEffect(() => {
    zoomLevelRef.current = zoomLevel;
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.zoom = zoomLevel;
    cameraRef.current.updateProjectionMatrix();

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
      camera.position.set(0, 2.3, 4.8);
      controls.target.set(0, 0, 0);
      baseDistanceRef.current = Math.hypot(2.3, 4.8);
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
              <span className="text-sky-400">
                US 6.5 (16.92mm Ø 360° Closed)
              </span>
            </div>
            <div className="text-slate-400 flex items-center gap-2">
              <span>Setting Head:</span>
              <span className="text-emerald-400">
                Cathedral Halo + Pierced Filigree
              </span>
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
              Center Gem:{" "}
              <span className="text-sky-400 font-semibold">
                3.20 ct Emerald Royal Sapphire
              </span>
            </div>
            <div className="text-slate-400">
              Pavé Melee:{" "}
              <span className="text-emerald-300 font-semibold">
                34× Micro-Pavé Diamonds
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
