export const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Հետադարձ կապ</h2>
          <p>
            aarba ընկերությունը զբաղվում է տրիցիկլների ներմուծմամբ և վաճառքով։ Վերջին
տարիներին էլեկտրական փոխադրամիջոցների նկատմամբ հետաքրքրությունը և պահանջարկը
շեշտակիորեն աճել է։ Ոլորտի զարգացման հիմնական գրավականներն են շահավետությունը և
էկոլոգիայի գործոնը։ Մեր ընկերության կողմից մատակարարվող էլեկտրական բեռնատար
տրիցիկլները ունեն տարբեր լրակազմ և տեխնիկական բնութագիր՝ կախված մոդելից, սակայն
բոլորն էլ համալրված են հզոր մարտկոցով, ծանր հուսալի մետաղական կոնստրուկցիայով,
շրջվող թափքով և իջեցվող կողերով։
Բոլոր տրիցիկլներն ունեն բարձր բեռնատարողություն, անվտանգ և հարմարավետ վարելու
համար անհրաժեշտ ֆունկցիոնալություն և մարտկոցի վերալիցքավորման հեշտ համակարգ:
Էլեկտրական եռանիվներն աշխատում են գրեթե անձայն: Տրիցիկլների գրանցման, ինչպես նաև
ապահավոգրության անհրաժեշտություն չկա։

Տրիցիկլների բոլոր մոդելների համար aarba ընկերությունը տրամադրում է մեկ տարվա
երաշխիք։ aarba սպասարկման կենտրոնը իրականացնում է նաև հետերաշխիքային
սպասարկում և մարտկոցների ու այլ անհրաժեծտ սարքավորումների վաճառք։
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>ք. Երևան</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>aarbacompany@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+374 44 151654</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <div>
              <iframe
                title=" "
                style={{ border: 0, width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.497157492948!2d44.51235970352934!3d40.177580882309066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf982dbbacd%3A0x38825c42f6e1f61e!2sPulpulak!5e0!3m2!1sen!2sam!4v1683384416659!5m2!1sen!2sam"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
