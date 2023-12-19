import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './indexPage.module.css'


export const AboutMe = () => {
  return (
    <div className="text-center vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
      <div className='content'>
        <div className="fs-1 fw-bold">About me</div>
        <div className="fs-5">
          <div>群馬県出身のソフトウェアエンジニア。</div>
          <div>中学、高校でプログラミングにハマり、現在は大学で機械工学を専攻しながら、エンジニアとして活動。</div>
          <div>現在は主にフロントエンドの開発をしています。</div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
