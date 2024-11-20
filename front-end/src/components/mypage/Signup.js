import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import NavbarTop from '../navbar/NavbarTop';
// import Footer from '../Footer';

function Signup() {
  const navigate = useNavigate();

  // 상태값 초기화
  const [customerID, setCustomerID] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [addressDetail, setAddressDetail] = React.useState('');
  const [account, setAccount] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 필수 항목 체크
    if (customerID && nickname && password && phone && zip && address && addressDetail && account) {
      const signupData = {
        CustomerID: customerID,
        CustomerNickname: nickname,
        Password: password,
        Phone: phone,
        Zip: zip,
        Address: address,
        AddressDetail: addressDetail,
        Account: account,
      };

      try {
        // 회원가입 API 요청
        const response = await axios.post('/loginpage/process/signup', signupData);
        const result = response.data;

        if (result.success) {
          alert('회원가입 성공!');
          navigate('/loginpage');
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('회원가입 요청 중 오류 발생:', error);
        alert('회원가입 요청 중 오류가 발생했습니다.');
      }
    } else {
      alert('모든 필수 정보를 입력해주세요.');
    }
  };

  return (
    <div>
      {/* <NavbarTop /> */}
      <div className="SignupPage">
        <h1>회원가입</h1>
        <form className="SignupContent" onSubmit={handleSubmit}>
          <div className="signupTextbox">
            <p>고객 ID *</p>
            <input
              type="text"
              value={customerID}
              onChange={(e) => setCustomerID(e.target.value)}
              placeholder="고유 ID를 입력해주세요."
              required
            />
            <p>닉네임 *</p>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요."
              required
            />
            <p>비밀번호 *</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
              required
            />
            <p>전화번호 *</p>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="- 없이 입력 (ex. 01012345678)"
              required
            />
            <p>우편번호 *</p>
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="우편번호를 입력해주세요."
              required
            />
            <p>주소 *</p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="주소를 입력해주세요."
              required
            />
            <p>상세 주소 *</p>
            <input
              type="text"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="상세 주소를 입력해주세요."
              required
            />
            <p>계좌번호 *</p>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="계좌번호를 입력해주세요."
              required
            />
          </div>
          <div className="btnContent">
            <button type="submit" className="signupBtn">
              회원가입
            </button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Signup;