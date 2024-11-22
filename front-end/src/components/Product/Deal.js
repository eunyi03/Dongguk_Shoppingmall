// // import React, { useState, useEffect } from "react";
// // import "./Deal.css";
// // import { useNavigate } from "react-router-dom";

// // function Deal() {
// //   const [items, setItems] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState("전체");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // 상품 목록 가져오기
// //     fetch("/products/list")
// //       .then((response) => response.json())
// //       .then((data) => setItems(data))
// //       .catch((error) => console.error("상품 목록 조회 오류:", error));
// //   }, []);

// //   const handleAddProduct = () => {
// //     navigate("/write");
// //   };

// //   const handleCategoryChange = (e) => {
// //     setSelectedCategory(e.target.value);
// //   };

// //   const filteredItems = selectedCategory === "전체"
// //     ? items
// //     : items.filter((item) => item.CategoryID === selectedCategory);

// //   return (
// //     <div className="deal-container">
// //       <h2>거래 내역</h2>
// //       <div className="top-controls">
// //         <select className="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
// //           <option value="전체">전체</option>
// //           <option value="도서">도서</option>
// //           <option value="의류">의류</option>
// //           <option value="악세서리">악세서리</option>
// //           <option value="기타">기타</option>
// //         </select>
// //         <button className="add-product-button" onClick={handleAddProduct}>
// //           글쓰기
// //         </button>
// //       </div>
// //       <div className="deal-list">
// //         {filteredItems.length === 0 ? (
// //           <p className="no-items">등록된 거래가 없습니다.</p>
// //         ) : (
// //           filteredItems.map((item) => (
// //             <div key={item.ProductID} className="deal-item">
// //               <img src={item.ProductImageURL} alt={item.ProductName} className="deal-image" />
// //               <div className="deal-info">
// //                 <h3>{item.ProductName}</h3>
// //                 <p>판매자: {item.SellerNickname}</p>
// //                 <p>판매 가격: {item.SellPrice}원</p>
// //                 <p>할인율: {item.Discount}%</p>
// //                 <p className="deal-date">등록일: {item.RegisterDate}</p>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Deal;



// // Deal.js
// import React, { useState, useEffect } from "react";
// import "./Deal.css";
// import { useNavigate } from "react-router-dom";

// function Deal() {
//   const [items, setItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("전체");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 상품 목록 가져오기
//     fetch("/products/list")
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => console.error("상품 목록 조회 오류:", error));
//   }, []);

//   const handleAddProduct = () => {
//     navigate('/write');
//   };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const handleItemClick = (item) => {
//     navigate('/productread', { state: { item } });
//   };

//   const filteredItems = selectedCategory === '전체'
//     ? items
//     : items.filter(item => item.CategoryID === selectedCategory);

//   return (
//     <div className="deal-container">
//       <h2>거래 내역</h2>
//       <div className="top-controls">
//         <select className="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="전체">전체</option>
//           <option value="도서">도서</option>
//           <option value="의류">의류</option>
//           <option value="악세서리">악세서리</option>
//           <option value="기타">기타</option>
//         </select>
//         <button className="add-product-button" onClick={handleAddProduct}>글쓰기</button>
//       </div>
//       <div className="deal-list">
//         {filteredItems.length === 0 ? (
//           <p className="no-items">등록된 거래가 없습니다.</p>
//         ) : (
//           filteredItems.map((item, index) => (
//             <div key={index} className="deal-item" onClick={() => handleItemClick(item)}>
//               <img src={item.ProductImage} alt={item.ProductName} className="deal-image" />
//               <div className="deal-info">
//                 <h3>{item.ProductName}</h3>
//                 <p>판매자 ID: {item.SellerID}</p>
//                 <p>판매 가격: {item.SellPrice}원</p>
//                 <p>할인율: {item.Discount}%</p>
//                 <p className="deal-date">등록일: {item.RegisterDate}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


// export default Deal;


import React, { useState, useEffect } from "react";
import "./Deal.css";
import { useNavigate } from "react-router-dom";

function Deal() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const navigate = useNavigate();

  useEffect(() => {
    // 상품 목록 가져오기
    fetch("/products/list")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("상품 목록 조회 오류:", error));
  }, []);

  const handleAddProduct = () => {
    navigate("/write");
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === "전체"
    ? items
    : items.filter((item) => item.CategoryID === selectedCategory);

  return (
    <div className="deal-container">
      <h2>거래 내역</h2>
      <div className="top-controls">
        <select className="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="전체">전체</option>
          <option value="도서">도서</option>
          <option value="의류">의류</option>
          <option value="악세서리">악세서리</option>
          <option value="기타">기타</option>
        </select>
        <button className="add-product-button" onClick={handleAddProduct}>
          글쓰기
        </button>
      </div>
      <div className="deal-list">
        {filteredItems.length === 0 ? (
          <p className="no-items">등록된 거래가 없습니다.</p>
        ) : (
          filteredItems.map((item) => (
            <div key={item.ProductID} className="deal-item">
              <img src={item.ProductImageURL} alt={item.ProductName} className="deal-image" />
              <div className="deal-info">
                <h3>{item.ProductName}</h3>
                <p>판매자: {item.SellerNickname}</p>
                <p>판매 가격: {item.SellPrice}원</p>
                <p>할인율: {item.Discount}%</p>
                <p className="deal-date">등록일: {item.RegisterDate}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Deal;