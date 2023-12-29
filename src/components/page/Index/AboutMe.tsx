import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'


export const AboutMe = () => {
  return (
    <div className="vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
      <div className='content'>
        <div className="fs-1 fw-bold text-center">About me</div>
        <div className="row mx-auto w-50">
          <div className="col-3">
            <img className="img-fluid img-thumbnail" src='profile_icon.jpg' alt="Profile" />
          </div>
          <div className="col-9">  
            <div className="fs-5">
              <div>群馬県出身のソフトウェアエンジニア。</div>
              <div>中学、高校でプログラミングにハマり、現在は大学で機械工学を専攻しながら、駆け出しエンジニアとして修業中。</div>
              <div>主にフロントエンドの開発をしています。</div>
              <div className="d-flex align-items-center py-4">
                <i style={{ fontSize: '40px' }} className="devicon-github-original colored pe-2" />
                <a className="link-underline link-underline-opacity-0" href="https://github.com/WNomunomu" target="_blank">https://github.com/WNomunomu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
