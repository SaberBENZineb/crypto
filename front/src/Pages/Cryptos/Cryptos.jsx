import React from "react";
import AllCrypto from "../../components/CryptoCom/AllCrypto";
import Slider from "../../components/CryptoCom/Slider";


const Cryptos = () => {
  return (
    <div>
      <Slider/>
      <br /><br />
      <AllCrypto />
    </div>
  );
};

export default Cryptos;
