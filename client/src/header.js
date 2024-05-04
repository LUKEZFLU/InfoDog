import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "./pic/logo_formal.jpg";

function Header() {
  let navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  // 监听 localStorage 变化
  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(localStorage.getItem('userId'));
    };

    // 添加事件监听器
    window.addEventListener('storage', handleStorageChange);

    // 组件卸载时移除监听器
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // 定义注销函数
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('houseId');
    setUserId(null);
    navigate('/');  // 可以重定向用户到首页或登录页
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <a href="/">
            <img src={headerLogo} alt="logo" />
          </a>
        </div>
        <button onClick={() => navigate("/explore")}>Explore</button>
        <button onClick={() => navigate("/list-your-place")}>List Your Place</button>
        <button onClick={() => navigate("/about-us")}>About us</button>
        {userId ? (
          <>
            <button onClick={() => navigate("/profile")}>Profile</button>
            <button onClick={handleLogout}>Logout</button> 
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>  // 显示登录按钮
        )}
      </nav>
    </header>
  );
}

export default Header;
