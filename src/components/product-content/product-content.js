import React from "react";
import "./product-content.css";

function ProductContent({ data }) {
  return (
    <div className="container">
      <div className="section-title">
        <h2>{data.productName}</h2>
      </div>
      <div className="row">
        <div className="gallery-item">
          <img
            src={require(`../../img/products/${data.imageName}`)}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <h6>
          <b>Տրիցիկլները համալրված են․</b>
        </h6>
      </div>
      {!!data.hamalrvatsSection && (
        <div className="row" style={{ margin: "0px" }}>
          <ul>
            {data.hamalrvatsSection.map((item, i) => (
              <li key={i + 1}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <div className="row">
        <table className="description-table">
          <tbody>
            <tr>
              <td>Գույն</td>
              <td className="text-end">{data.tableContents.guyn}</td>
            </tr>
            <tr>
              <td>Բրենդ</td>
              <td className="text-end">
                <span style={{ fontSize: "20px", fontWeight: "600" }}>aar</span>
                ba
              </td>
            </tr>
            <tr>
              <td>Շարժիչի հզորություն</td>
              <td className="text-end">
                {data.tableContents.sharjichHzorutyun}
              </td>
            </tr>
            <tr>
              <td>Մարտկոց</td>
              <td className="text-end">{data.tableContents.martkoc}</td>
            </tr>
            <tr>
              <td>Մարտկոցի տեսակ</td>
              <td className="text-end">{data.tableContents.martkocTesak}</td>
            </tr>
            <tr>
              <td>Չափսեր (Ե x Լ x Բ)</td>
              <td className="text-end">{data.tableContents.chapser}</td>
            </tr>
            <tr>
              <td>Թափքի չափսեր (Ե x Լ x Բ)</td>
              <td className="text-end">{data.tableContents.tapqiChapser}</td>
            </tr>
            <tr>
              <td>Տրիցիկլի քաշ</td>
              <td className="text-end">{data.tableContents.tricikaliQash}</td>
            </tr>
            <tr>
              <td>Բեռնատարողունակություն</td>
              <td className="text-end">
                {data.tableContents.bernataroxunakutyun}
              </td>
            </tr>
            <tr>
              <td>Առավելագույն արագություն</td>
              <td className="text-end">{data.tableContents.maxSpeed}</td>
            </tr>
            <tr>
              <td>Մեկ լիցքավորումով անցնող ճանապարհ</td>
              <td className="text-end">
                {data.tableContents.mekLicqChanaparh}
              </td>
            </tr>
            <tr>
              <td>Ազդանշանային համակարգի առկյություն</td>
              <td className="text-end">{data.tableContents.azdHamakarg}</td>
            </tr>
            <tr>
              <td>Առջևի արգելակ</td>
              <td className="text-end">{data.tableContents.archevArgelak}</td>
            </tr>
            <tr>
              <td>Հետևի արգելակ</td>
              <td className="text-end">{data.tableContents.hetevArgelak}</td>
            </tr>
            <tr>
              <td>Առջևի անիվ</td>
              <td className="text-end">{data.tableContents.archevAniv}</td>
            </tr>
            <tr>
              <td>Հետևի անիվներ</td>
              <td className="text-end">{data.tableContents.hetevAniv}</td>
            </tr>
            <tr>
              <td>Լիցքավորման տևողություն (0-100%)</td>
              <td className="text-end">{data.tableContents.mekLicqTevox}</td>
            </tr>
            <tr>
              <td>Առջևի կախոց</td>
              <td className="text-end">{data.tableContents.arjeviKaxoc}</td>
            </tr>
            <tr>
              <td>Հետևի կախոց</td>
              <td className="text-end">{data.tableContents.heteviKaxoc}</td>
            </tr>
            <tr>
              <td>Քարշակ</td>
              <td className="text-end">{data.tableContents.qarshak}</td>
            </tr>
            <tr>
              <td>Կատարելագործված հիդրավլիկ ամորտիզատոր</td>
              <td className="text-end">
                {data.tableContents.hidravlikAmortizator}
              </td>
            </tr>
            <tr>
              <td>Յոթ թերթանի զսպան (ռեսոր)</td>
              <td className="text-end">{data.tableContents.resor}</td>
            </tr>
            <tr>
              <td>Ցածրացրած փոխանցում</td>
              <td className="text-end">{data.tableContents.ponizheni}</td>
            </tr>
            <tr>
              <td>Լրացուցիչ նստատեղի առկայություն</td>
              <td className="text-end">
                {data.tableContents.lracucichNstategh}
              </td>
            </tr>
            <tr>
              <td>Արտադրող երկիր</td>
              <td className="text-end">{data.tableContents.artadroxErkir}</td>
            </tr>
            <tr>
              <td>Երաշխիք</td>
              <td className="text-end">{data.tableContents.erashxiq}</td>
            </tr>
            <tr>
              <td>Շահագործում</td>
              <td className="text-end">{data.tableContents.shahagortsum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductContent;
