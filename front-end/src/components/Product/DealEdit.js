
// ProductEdit.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Deal.css';

function DealEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    // 수정된 내용을 저장하는 로직 추가 (예: API 호출)
    console.log('수정된 내용:', product);
    navigate('/');
  };

  return (
    <div className="deal-container">
      <h2>거래 수정</h2>
      <div className="edit-form">
        <label>
          상품명:
          <input
            type="text"
            name="ProductName"
            value={product.ProductName || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          판매 가격:
          <input
            type="number"
            name="SellPrice"
            value={product.SellPrice || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          할인율:
          <input
            type="number"
            name="Discount"
            value={product.Discount || ''}
            onChange={handleChange}
          />
        </label>
        <button className="save-button" onClick={handleSave}>저장</button>
      </div>
    </div>
  );
}

export default DealEdit;
