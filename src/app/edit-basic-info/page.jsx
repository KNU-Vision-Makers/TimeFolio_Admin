"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

const BasicInfoPage = () => {
  const [countries, setCountries] = useState([]);

  const [nationality, setNationality] = useState('');
  const [telCode, setTelCode] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [emailDomainSelect, setEmailDomainSelect] = useState('');
  const [customDomain, setCustomDomain] = useState('');
  const [isSavePressed, setIsSavePressed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tel2: '',
    tel3: '',
    emailId: '',
    github: '',
    instagram: ''
  });

  const getColor = (value) => (value === '' ? '#7E7E7E' : 'black');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const countryNames = data
          .map(c => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);
      })
      .catch(err => console.error('Failed to fetch countries:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", {
      ...formData,
      telCode,
      birthYear,
      birthMonth,
      birthDay,
      nationality,
      emailDomain: emailDomainSelect === 'custom' ? customDomain : emailDomainSelect
    });

    // 버튼 누름 효과 트리거
    setIsSavePressed(true);
    setTimeout(() => setIsSavePressed(false), 200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNationalityChange = (e) => setNationality(e.target.value);
  const handleTelCodeChange = (e) => setTelCode(e.target.value);
  const handleBirthYearChange = (e) => setBirthYear(e.target.value);
  const handleBirthMonthChange = (e) => setBirthMonth(e.target.value);
  const handleBirthDayChange = (e) => setBirthDay(e.target.value);

  const handleEmailDomainSelectChange = (e) => {
    setEmailDomainSelect(e.target.value);
    if (e.target.value !== 'custom') {
      setCustomDomain('');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = document.getElementById("previewImage");
        if (img) img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAtFocus = (e) => {
    if (e.target.value === '') {
      e.target.value = '@ ';
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = e.target.value.length;
      }, 0);
    }
  };

  const handleAtBlur = (e) => {
    if (e.target.value === '@ ') {
      e.target.value = '';
    }
  };

  const handleAtKeyDown = (e) => {
    const input = e.target;
    const cursorPos = input.selectionStart;
    if (e.key === 'Backspace' && cursorPos <= 1) {
      e.preventDefault();
    }
    if (e.key === 'Delete' && cursorPos === 0) {
      e.preventDefault();
    }
  };

  const handleAtChange = (e) => {
    const val = e.target.value;
    if (!val.startsWith('@ ')) {
      e.target.value = '@ ' + val.replace(/@/g, '');
    }
    handleChange(e);
  };

  const fields = ['NAME', 'TEL', 'EMAIL', 'BIRTH', 'NATIONALITY', 'GITHUB', 'INSTAGRAM'];

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Edit information</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.contentRow}>
            <div className={styles.leftForm}>
              {fields.map((field) => (
                <div
                  key={field}
                  className={`${styles.formRow} ${
                    field === 'GITHUB' ? styles.extraGap : ''
                  }`}
                >
                  <label htmlFor={field.toLowerCase()} className={styles.label}>
                    {field}
                  </label>

                  {field === 'TEL' ? (
                    <div className={styles.inputGroup}>
                      <select
                        className={styles.inputSmall}
                        name="tel-1"
                        value={telCode}
                        onChange={handleTelCodeChange}
                      >
                        {['010', '011', '012', '013', '014', '015', '016', '017', '018', '019'].map(code => (
                          <option key={code} value={code}>{code}</option>
                        ))}
                      </select>
                      <span className={styles.hyphen}>_</span>
                      <input
                        type="text"
                        className={styles.inputSmall}
                        name="tel2"
                        placeholder="0000"
                        value={formData.tel2}
                        onChange={handleChange}
                      />
                      <span className={styles.hyphen}>_</span>
                      <input
                        type="text"
                        className={styles.inputSmall}
                        name="tel3"
                        placeholder="0000"
                        value={formData.tel3}
                        onChange={handleChange}
                      />
                    </div>
                  ) : field === 'BIRTH' ? (
                    <div className={styles.inputGroup}>
                      <select
                        className={styles.inputSmall}
                        name="birth-year"
                        value={birthYear}
                        onChange={handleBirthYearChange}
                        style={{ color: 'black' }}
                      >
                        <option value="" disabled>YYYY</option>
                        {Array.from({ length: 41 }, (_, i) => 1980 + i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <span className={styles.hyphen}>_</span>
                      <select
                        className={styles.inputSmall}
                        name="birth-month"
                        value={birthMonth}
                        onChange={handleBirthMonthChange}
                        style={{ color: 'black' }}
                      >
                        <option value="" disabled>MM</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <span className={styles.hyphen}>_</span>
                      <select
                        className={styles.inputSmall}
                        name="birth-day"
                        value={birthDay}
                        onChange={handleBirthDayChange}
                        style={{ color: 'black' }}
                      >
                        <option value="" disabled>DD</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                  ) : field === 'NATIONALITY' ? (
                    <select
                      id="nationality"
                      name="nationality"
                      className={styles.inputSmall}
                      value={nationality}
                      onChange={handleNationalityChange}
                      style={{ color: 'black' }}
                    >
                      <option value="" disabled>Choose nationality</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  ) : field === 'EMAIL' ? (
                    <div className={styles.emailGroup}>
                      <input
                        id="email-id"
                        name="emailId"
                        type="text"
                        className={styles.emailInput}
                        placeholder="e-mail"
                        value={formData.emailId}
                        onChange={handleChange}
                      />
                      <span className={styles.emailAt}>@</span>
                      {emailDomainSelect === 'custom' ? (
                        <input
                          type="text"
                          name="email-domain"
                          className={styles.emailInput}
                          placeholder="Domain"
                          value={customDomain}
                          onChange={(e) => setCustomDomain(e.target.value)}
                          onBlur={() => {
                            if (customDomain.trim() === '') {
                              setEmailDomainSelect('');
                            }
                          }}
                          style={{ color: getColor(customDomain) }}
                        />
                      ) : (
                        <select
                          name="email-domain-select"
                          className={styles.emailInput}
                          value={emailDomainSelect}
                          onChange={handleEmailDomainSelectChange}
                          style={{ color: 'black' }}
                        >
                          <option value="" disabled>domain</option>
                          <option value="custom">직접 입력</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="naver.com">naver.com</option>
                          <option value="hanmail.net">hanmail.net</option>
                          <option value="daum.net">daum.net</option>
                          <option value="kakao.com">kakao.com</option>
                        </select>
                      )}
                    </div>
                  ) : ['GITHUB', 'INSTAGRAM'].includes(field) ? (
                    <input
                      id={field.toLowerCase()}
                      name={field.toLowerCase()}
                      type="text"
                      className={`${styles.input} ${styles.centerText}`}
                      placeholder={`Enter your ${field.toLowerCase()}`}
                      onFocus={handleAtFocus}
                      onBlur={handleAtBlur}
                      onKeyDown={handleAtKeyDown}
                      value={formData[field.toLowerCase()]}
                      onChange={handleAtChange}
                    />
                  ) : (
                    <input
                      id={field.toLowerCase()}
                      name={field.toLowerCase()}
                      type="text"
                      className={`${styles.input} ${styles.centerText}`}
                      placeholder={`Enter your ${field.toLowerCase()}`}
                      value={formData[field.toLowerCase()]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={styles.photoUpload}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img
                id="previewImage"
                className={styles.previewImage}
                alt="Preview"
              />
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              type="submit"
              className={`${styles.saveButton} ${isSavePressed ? styles.saveButtonPressed : ''}`}
            >
              S A V E
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfoPage;
