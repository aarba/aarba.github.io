export default function AboutUs(params) {
  return (
    <section id="why-us" className="why-us">
    <div className="container">

      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h4>Էլեկտրական տրիցիկլները առանձնահատկությունները</h4>
            <p>
              Էլեկտրական տրիցիկլները հարմար են և՛ կոմերցիոն, և՛ անձնական օգտագործման համար: Այս
փոխադրամիջոցի կիրառումը զգալիորեն կհեշտացնի աշխատանքային առօրյան։ Տրիցիկլը
վարելու համար հատուկ հմտություններ հարկավոր չեն, անգամ տեխնիկայից շատ հեռու
մարդիկ կարող են հեշտությամբ սովորել այն վարել։
            </p>
            {/* <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  {/* <i className="bx bx-receipt"></i> */}
                  <h5>Կիրառությունը</h5>
                  <p>հանգստյան գոտիներում, հյուրանոցային համալիրներում,
                  փական տներով կամ քոթեջներով հարուստ թաղամասերում,
                  շինհրապարակներում,
                  արտադրական և առևտրային նշանակության տարածքներում,
                  պահեստներում,
                  գյուղատնտեսության և ջերմոցային տնտեսության մեջ</p>
                </div>
              </div>
              <div className="col-xl-5 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  {/* <i className="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris ladore pan</h4> */}
                  <p>Բեռնատար տրիցիկլները հարմար են կաթի տարաներ, կենդանիներ, արկղերով միրգ ու
բանջարեղեն տեղափոխելու համար, իսկ կիսակցանքի ինքնաթափ ֆունկցիան թույլ կտա
հեշտությամբ բեռնաթափել ցանկացած տեսակի ապրանք:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}