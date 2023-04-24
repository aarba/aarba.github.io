import { useTranslation } from 'react-i18next';
import {useState} from "react";
import Modal from "../components/modal/modal"
import ProductContent from "../components/product-content/product-content"
import {products} from "../constants/products";

export default function Services(params) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onClick = (id) => {
    setShowModal(true);
    setModalContent(products.get(id));
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = 'yes';
  }

  return (
    <section id="services" className="services">
      {showModal && (
          <Modal onClose={handleCloseModal}>
            <ProductContent data={modalContent} />
          </Modal>
      )}


      <div className="container">

        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p>{t('services.desc')}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch c-p" onClick={() => onClick(1)}>
            <div className="icon-box">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4><a href="">{t('services.implantation')}</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 c-p" onClick={() => onClick(2)}>
            <div className="icon-box">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4><a href="">{t('services.surgery')}</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 c-p" onClick={() => onClick(3)}>
            <div className="icon-box">
              <div className="icon"><i className="fas fa-hospital-user"></i></div>
              <h4><a href="">{t('services.cosmetic')}</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          {/*commented by sam*/}
          {/*<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">*/}
          {/*  <div className="icon-box">*/}
          {/*    <div className="icon"><i className="fas fa-dna"></i></div>*/}
          {/*    <h4><a href="">{t('services.surgery')}</a></h4>*/}
          {/*    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">*/}
          {/*  <div className="icon-box">*/}
          {/*    <div className="icon"><i className="fas fa-notes-medical"></i></div>*/}
          {/*    <h4><a href="">{t('services.therapy')}</a></h4>*/}
          {/*    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">*/}
          {/*  <div className="icon-box">*/}
          {/*    <div className="icon"><i className="fas fa-notes-medical"></i></div>*/}
          {/*    <h4><a href="">{t('services.pediatric')}</a></h4>*/}
          {/*    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">*/}
          {/*  <div className="icon-box">*/}
          {/*    <div className="icon"><i className="fas fa-notes-medical"></i></div>*/}
          {/*    <h4><a href="">{t('services.orthodontics')}</a></h4>*/}
          {/*    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
    </section>
  )
}