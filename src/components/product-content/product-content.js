import React from 'react';
import './product-content.css';
function ProductContent({data}) {
    return (
        <div className="container">

            <div className="section-title">
                <h2>{data.productName}</h2>
            </div>
            <div className="row">
                <div className="gallery-item">
                    <img src={require(`../../img/products/${data.imageName}`)} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <h6><b>Տրիցիկլները համալրված են․</b></h6>
            </div>
            {!!data.hamalrvatsSection && <div className="row">
                <ul>
                    {data.hamalrvatsSection.map((item, i) => <li key={i + 1}>{item}</li>)}
                </ul>
            </div>}
            <br />
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
                            <td className="text-end">{data.tableContents.brand}</td>
                        </tr>
                        <tr>
                            <td>Շարժիչի հզորություն</td>
                            <td className="text-end">{data.tableContents.sharjichHzorutyun}</td>
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
                            <td>Բեռնատարողունակություն</td>
                            <td className="text-end">{data.tableContents.bernataroxunakutyun}</td>
                        </tr>
                        <tr>
                            <td>Առավելագույն արագություն</td>
                            <td className="text-end">{data.tableContents.maxSpeed}</td>
                        </tr>
                        <tr>
                            <td>Մեկ լիցքավորումով անցնող ճանապարհ</td>
                            <td className="text-end">{data.tableContents.mekLicqChanaparh}</td>
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
                            <td>Ponizhennaya peredacha</td>
                            <td className="text-end" />
                        </tr>
                        <tr>
                            <td>Քարշակ</td>
                            <td className="text-end">{data.tableContents.qarshak}</td>
                        </tr>
                        <tr>
                            <td>Մեկ լիցքավորման տևողություն</td>
                            <td className="text-end">{data.tableContents.mekLicqTevox}</td>
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