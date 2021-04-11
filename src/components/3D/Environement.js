import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from "three"

function Environement() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        '/skybox/posx.jpeg',
        '/skybox/negx.jpeg',
        '/skybox/posy.jpeg',
        '/skybox/negy.jpeg',
        '/skybox/posz.jpeg',
        '/skybox/negz.jpeg',
    ]);

    scene.background = texture;
    return (

        <group />
    )

}

export default Environement
