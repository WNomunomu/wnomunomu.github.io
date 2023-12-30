import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'


export const AboutMe = () => {
  return (
    <div className="vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
      <div className='content'>
        <div className="fs-1 fw-bold text-center">About me</div>
        <div className="row mx-auto col-md-6">
          <div className="col-md-4 py-2">
            <img className="img-thumbnail" src='profile_icon.jpg' alt="Profile" />
          </div>
          <div className="col-md-8 py-2">  
            <div className="fs-5">
              <div>
                ソフトウェアエンジニア。
                中学、高校でプログラミングにハマり、現在は早稲田大学に在学。
                機械工学を専攻しながら、駆け出しエンジニアとして修業中。
                最近は主にフロントエンドの開発をしています。
              </div>
              <div className="d-flex align-items-center py-4">
                <i style={{ fontSize: '40px' }} className="devicon-github-original colored pe-2" />
                <a className="link-underline link-underline-opacity-0" href="https://github.com/WNomunomu" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
