const BasicInfo = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '80px 40px 0 200px',
        fontFamily: "'Cheap-Potatoes-Black-Thin', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1450px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '100px',
        }}
      >
        {/* 왼쪽: 기본 정보 + SNS */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            maxWidth: '600px',
            marginTop: '40px',
          }}
        >
          {/* 구분선 박스 */}
          <div
            style={{
              position: 'relative',
              width: '110%',
              left: '-7.5%',
              paddingTop: '10px',
              paddingBottom: '10px',
              fontSize: '16px',
              fontWeight: 100,
              color: '#7E7E7E',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              rowGap: '2px',
              columnGap: '100px',
              letterSpacing: '0.3px',

              borderTop: '2.5px solid #222',
              borderBottom: '2.5px solid #222',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              borderBottomLeftRadius: '5px',
              borderBottomRightRadius: '5px',
            }}
          >
            <p>NAME.</p><p>RYUSUBIN</p>
            <p>TEL.</p><p>82+)1012345678</p>
            <p>EMAIL.</p><p>SUBIN8509@GMAIL.COM</p>
            <p>BIRTH.</p><p>2004.05.08</p>
            <p>NATIONALITY.</p><p>SOUTH KOREA</p>
          </div>

          {/* SNS 아이콘 */}
          <div
            style={{
              marginTop: '60px',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '80px',
              marginLeft: '40px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src="/images/github.png"
                alt="GitHub"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                  margin: '0 auto',
                  borderRadius: '8px',
                }}
              />
              <p
                style={{
                  marginTop: '10px',
                  fontWeight: 100,
                  color: '#727272',
                  fontFamily: "sans-serif",
                  fontSize: '22px',
                }}
              >
                @naldori
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src="/images/insta.png"
                alt="Instagram"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                  margin: '0 auto',
                  borderRadius: '8px',
                }}
              />
              <p
                style={{
                  marginTop: '10px',
                  fontWeight: 100 ,
                  color: '#727272',
                  fontFamily: "sans-serif",
                  fontSize: '22px',
                }}
              >
                @04bsu_yr
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 프로필 사진 */}
        <div
          style={{
            width: '300px',
            flexShrink: 0,
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="profile"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '80px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;