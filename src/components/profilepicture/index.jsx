import ProfileImg from "../../assets/profile-picture.png";

import * as S from "./styles"

function ProfilePicture() {
  return (
    <>
      <S.Img src={ProfileImg} alt="imagem de perfil"/>
    </>
  );
}

export default ProfilePicture;
