import Modal from '../components/Modal';
import { useState } from 'react';

import Button from '../components/Button'

export default function ModalPage() {
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = (_event) => {
        setModalOpen(true);
    }

    const closeModal = (_event) => {
        setModalOpen(false);
    }

    const actionBar = <Button primary rounded className="ml-auto" onClick={closeModal}>Accept</Button>

    const modal = <Modal closeModal={closeModal} actionBar={actionBar}> <p>Please accept the agreement</p> </Modal>

    return (
        <div>
            <Button primary outline onClick={handleClick}>Open Modal</Button>
            {modalOpen && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
                in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
                tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
                commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
                pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
                dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
                condimentum viverra scelerisque sit amet elit. Mauris eget nunc
                sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
                risus lorem.
            </p>

        </div>
    )
}
