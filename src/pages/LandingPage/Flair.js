import { useGLTF, useAnimations } from '@react-three/drei';
// import { bindActionCreators } from '@reduxjs/toolkit';
import { useRef, useEffect } from 'react';
// import { AnimationActionLoopStyles } from 'three';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/flair.glb');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Armature"
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.newVegasHips} />
        <skinnedMesh
          geometry={nodes.newVegasElvis_BodyGeo.geometry}
          material={materials['Character_Fat_Elvis_body_color.001']}
          skeleton={nodes.newVegasElvis_BodyGeo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.newVegasElvis_BrowsAnimGeo.geometry}
          material={materials['Elvis_Brows_MAT.001']}
          skeleton={nodes.newVegasElvis_BrowsAnimGeo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.newVegasElvis_EyesAnimGeo.geometry}
          material={materials['Elvis_Eyes_MAT.001']}
          skeleton={nodes.newVegasElvis_EyesAnimGeo.skeleton}
        />
        <skinnedMesh
          geometry={nodes.newVegasElvis_MouthAnimGeo.geometry}
          material={materials['Elvis_Mouth_MAT.001']}
          skeleton={nodes.newVegasElvis_MouthAnimGeo.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/flair.glb');
