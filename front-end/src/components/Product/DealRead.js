// // ProductRead.js
// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './DealRead.css';

// function ProductRead() {
//   const [item, setItem] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state && location.state.item) {
//       setItem(location.state.item);
//     }
//   }, [location.state]);

//   return (
//     <div className="deal-container">
//       {item ? (
//         <div className="deal-details">
//           <div className="deal-item-details">
//             <img src={item.ProductImage} alt={item.ProductName} className="deal-image" />
//             <div className="deal-info">
//               <h2>{item.ProductName}</h2>
//               <p>판매자 닉네임: {item.SellerID}</p>
//               <p>판매 가격: {item.SellPrice}원</p>
//               <p>할인율: {item.Discount}%</p>
//               <p className="deal-description">제품 설명: {item.Description}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>해당 제품의 정보를 불러올 수 없습니다.</p>
//       )}
//     </div>
//   );
// }

// export default ProductRead;

// ProductRead.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DealRead.css';

function ProductRead() {
  const [item, setItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setItem(location.state.item);
    }
  }, [location.state]);

  return (
    <div className="deal-container">
      {item ? (
        <div className="deal-details">
          <div className="deal-item-details">
            <img src={item.ProductImageURL} alt={item.ProductName} className="deal-image" />
            <div className="deal-info">
              <h2>{item.ProductName}</h2>
              <p>판매자 닉네임: {item.SellerNickname}</p>
              <p>판매 가격: {item.SellPrice}원</p>
              <p>할인율: {item.Discount}%</p>
              <p className="deal-description">제품 설명: {item.Description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>해당 제품의 정보를 불러올 수 없습니다.</p>
      )}
    </div>
  );
}

export default ProductRead;
