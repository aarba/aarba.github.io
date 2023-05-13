export default function AboutUs(params) {
  return (
    <section id="why-us" className="why-us">
    <div className="container">

      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h4>Էլեկտրաէներգիաի ծախսի հաշվարկ</h4>
            <p>
              <ul>
                 <li> Մարտկոցի միջին տարողունակություն (60v-58Ah) 60x58=3480 </li> 
                 <li> 1 կՎտ = 45դր </li>
                 <li> 3.480 կՎտ x 45 = 157դր </li>
              </ul>
              Մեկ լիցքավորման արժեքը չի գերազանցում 157դր, որով կարելի է գնալ 55-60կմ, 
              մինչդեռ 1լ բեզինի գինը 370դր Է
            </p>
            {/* <p>
              Էլեկտրական տրիցիկլները հարմար են և՛ կոմերցիոն, և՛ անձնական օգտագործման համար: Այս
փոխադրամիջոցի կիրառումը զգալիորեն կհեշտացնի աշխատանքային առօրյան։ Տրիցիկլը
վարելու համար հատուկ հմտություններ հարկավոր չեն, անգամ տեխնիկայից շատ հեռու
մարդիկ կարող են հեշտությամբ սովորել այն վարել։
            </p> */}
            {/* <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div> */}
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-xl-6 d-flex align-items-stretch">
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
              <div className="col-xl-6 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  {/* <i className="bx bx-cube-alt"></i> */}
                  <h5>Առավելություններ</h5> 
                  <p>
                    <ul>
                       <li>Գրեթե անվճար բեռների տեղափոխում</li> 
                       <li>էժան պահեստամասեր և սպասարկում</li>
                       <li>Ոչ մի պետական գրանցում և ապահովագրություն</li>
                       <li>Էկալոգիապես մաքուր և անձայն</li>
                    </ul>
                  </p>
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