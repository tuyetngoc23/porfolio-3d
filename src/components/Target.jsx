import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const animRef = useRef(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  useEffect(() => {
    if (!targetRef.current) return;
    animRef.current = gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
    });
    return () => {
      if (animRef.current) {
        animRef.current.kill();
        animRef.current = null;
      }
    };
  }, []);
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI/5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
