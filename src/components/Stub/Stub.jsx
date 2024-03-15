// // import { nanoid } from "@reduxjs/toolkit";
// import { useEffect } from 'react';
// // import { Img } from './ProductModal.styled';
// import {
//   Overlay,
//   Modal,
//   CloseBtn,
// } from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';

// import cross from 'assets/images/svg/cross.svg';


// const Stub = ({ onClose }) => {

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.code === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleOverlayClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };

//   return (
//     // <Overlay onClick={handleOverlayClick}>
//     //   <Modal>
//     //     <CloseBtn type="button" onClick={onClose}>
//     //       <img src={cross} alt="close button" />
//     //     </CloseBtn>

        
//     //   </Modal>
//     // </Overlay>
//     <Overlay onClick={handleOverlayClick}>
//         <ModalBacking>
//           <Modal style={{ maxWidth: '40vw' }}>
//             <div
//               style={{
//                 textAlign: 'center',
//                 backgroundColor: 'var(--bg-color-grey)',
//               }}
//             >
//               <H2>{lang[languages].NavLinkBar_message.toUpperCase()}</H2>
//             </div>
//             <CloseBtn type="button" onClick={onClose}>
//               <img src={cross} alt="close button" />
//             </CloseBtn>
//             <Section>              
//               <h1 style={{ margin: '40px auto' }}>
//                 <b>This module is temporarily blocked</b>
//               </h1>
//             </Section>
//           </Modal>
//         </ModalBacking>
//       </Overlay>
//   );
// }

// export default Stub;

import { useEffect } from 'react';
import {
  Overlay,
  ModalBacking,
  Modal,
  CloseBtn,
} from 'components/ConstComponentsStyle/ConstComponentsStyle.styled';
import {
  Section,
} from "components/Feedback/Feedback.styled";

import cross from 'assets/images/svg/cross.svg';

const Stub = ({ onClose }) => {

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <ModalBacking>
          <Modal style={{ maxWidth: '40vw' }}>
            <CloseBtn type="button" onClick={onClose}>
              <img src={cross} alt="close button" />
            </CloseBtn>
            <Section>
              <h1 style={{padding: '50px' }}>
                <b>This module is temporarily blocked</b>
              </h1>
            </Section>
          </Modal>
        </ModalBacking>
      </Overlay>
    </>
  );
};

export default Stub;
