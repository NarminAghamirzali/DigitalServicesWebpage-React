import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const FAQ = () => {
    const [ qa, setQa ] = useState([
        {
            'id': 1,
            'checked': false,
            'question': `Portal hansı tələb əsasında yaradılıb?`,
            'answer': `Azərbaycan Respublikası Prezidentinin 2020-ci il 27 fevral tarixli 1859 nömrəli Sərəncamı ilə təsdiq edilmiş “Açıq hökumətin təşviqinə dair 2020-2022-ci illər üçün Milli Fəaliyyət Planı”-nda yerli icra hakimiyyəti orqanları tərəfindən göstərilən xidmətlərin elektronlaşdırılması istiqamətdə aşağıdakı tapşırıqlar verilmişdir:
            <br />•	Yerli icra hakimiyyəti orqanlarının vətəndaşların müraciətlərini elektron qaydada qəbul etməsi işinin təkmilləşdirilməsi, habelə yerli icra hakimiyyəti orqanlarının göstərdikləri elektron xidmətlərin sayının artırılması üçün tədbirlər görülməsi;
            <br />•	Dövlət xidmətinin göstərilməsi üçün zəruri olan sənəd və ya məlumat digər dövlət qurumunda mövcud olduğu halda, həmin sənədin və ya məlumatın vətəndaşdan tələb edilmədən Elektron Hökumət İnformasiya Sistemi vasitəsilə müvafiq dövlət qurumundan alınmasının təmin edilməsi üçün bu prinsipin sahəvi normativ hüquqi aktlarda təsbit edilməsi, habelə bu prinsipə əsaslanan elektron xidmətlərin sayının artırılması.`
        },
        {
            'id': 2,
            'checked': false,
            'question': `Rəqəmsal İcra Hakimiyyəti portalına telefon vasitəsilə daxil ola bilərəm?`,
            'answer': `Bəli, portala həm veb, həm də mobil brauzer üzərindən daxil olmaq mümkündür.`
        },
        {
            'id': 3,
            'checked': false,
            'question': `Rəqəmsal İcra Hakimiyyəti portalı nə üçündür?`,
            'answer': `Portalın əsas məqsədi yerli icra hakimiyyəti orqanlarının (YİHO) fəaliyyətinin optimallaşdırılması, digər qurumlarla əlaqələndirilməsi, məlumatların elektronlaşdırılması, elektron xidmətlərin göstərilməsi, xidmətlərdən istifadənin asanlaşdırılması, qəbula yazılma və onlayn görüşlərin keçirilməsi, YİHO tərəfindən görülən işlər haqqında məlumatların yerləşdirilməsi və idarəetmədə vətəndaş iştirakçılığının təmin edilməsidir.`
        },
        {
            'id': 4,
            'checked': false,
            'question': `E-iştirakçılıq bölməsi nə üçündür?`,
            'answer': `E-iştirakçılıq İnformasiya və Kommunikasiya Texnologiyaları (İKT) vasitəsi ilə vətəndaşın dövlət idarəetməsində iştirak etməsi deməkdir. Portalın bu bölməsinin köməyi ilə vətəndaş icra hakimiyyətinə aid olan məsələlərlə bağlı operativ şəkildə sorğu hazırlayır. Məsələn, vətəndaş sorğuda yaşadığı əraziylə bağlı hər hansı bir təklif irəli sürə bilər. (yol çəkilməsi, park salınması və s.) Sorğularda qeyd olunan məsələnin icrası ilə bağlı qərar səs çoxluğu əsasında verilir. Beləcə, vətəndaş özünə aid qəbul edilmiş dövlət qərarlarında birbaşa olaraq iştirak etmiş olur. Eyni zamanda bu bölmə İcra Hakimiyyətləri tərəfindən də sorğuların yaradılmasına və vətəndaşlar tərəfindən səs verməyə qoyulmasına imkan yaradır.`
        },
        {
            'id': 5,
            'checked': false,
            'question': `Şəxsi kabinet nə üçündür?`,
            'answer': `Portalın şəxsi kabinetinə “ASAN Login” vasitəsilə daxil olmaq lazımdır. Burada yerli icra hakimiyyəti orqanlarına etdiyiniz müraciətlərin statusuna baxa, digər vətəndaşın müraciətlərinə səs verə, müvafiq şəxslərin qəbuluna yazıla və ya təklif və şikayətlərini bildirə bilərsiniz.`
        },
        {
            'id': 6,
            'checked': false,
            'question': `Portala necə daxil olmaq olar?`,
            'answer': `Vətəndaşların portala girişi yalnız vahid giriş sistemi (ASAN Login) ilə mümkündür.`
        },
        {
            'id': 7,
            'checked': false,
            'question': `Rəqəmsal İcra Hakimiyyəti Portalında hansı xidmətlərdən yararlana bilərəm?`,
            'answer': `Portaldan istifadə etməklə Yerli İcra Hakimiyyətləri tərəfindən göstərilən 9 xidmət və “Bir pəncərə -Tikintiyə icazə” sisteminə keçid ilə təmin olunan 3 xidmətdən istifadə edə bilərsiniz.`
        },
        {
            'id': 8,
            'checked': false,
            'question': `Rəqəmsal İcra Hakimiyyəti portalının vətəndaşa faydası nədir?`,
            'answer': `Portalın vətəndaşlara faydaları aşağıda göstərilib:`
        },
        {
            'id': 9,
            'checked': false,
            'question': `“ASAN Login” sistemində necə qeydiyyatdan keçə bilərəm?`,
            'answer': `“ASAN Login” sistemində “Mobil nömrə ilə” və ya “Video qeydiyyat” vasitəsilə qeydiyyatdan keçə bilərsiniz. Bunun üçün “İdentifikasiya nömrəsi ilə” bölməsinə daxil olaraq, “Qeydiyyat”düyməsini sıxıb, 2 üsuldan birinə klik edib, qeydiyyata başlaya bilərsiniz. Mobil nömrə ilə qeydiyyat zamanı daxil edilən mobil nömrə sizin öz adınıza olmalıdır. Video qeydiyyat zamanı isə mobil nömrənin sizin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 5 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. 
            “ASAN Login”-də qeydiyyatdan keçməklə bağlı video təlimata keçid: 
            <Link to="https://www.youtube.com/watch?v=aqcALD1jT7k" target="_blank">https://www.youtube.com/watch?v=aqcALD1jT7k</Link>`
        }
    ]);

    const handleClick = (id) => {
        const newQa = qa.map(item => item.id === id 
            ? (item.checked ? {...item, checked: false} : {...item, checked: true})
            : item
        )
        setQa(newQa);
    }

  return (
    <section id="faq">
            <div className="pages-header">
                <ul className="pages-nav">
                    <li className="pages-headings">
                        <Link to="/">Ana səhifə</Link>
                        <i className='bx bx-chevron-right'></i>
                    </li>
                    <li className="pages-headings" style={{color: "#6c788f"}}>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="pages-content-container">
                <h3 className="pages-heading">
                    FAQ
                </h3>
                <p className="pages-info">
                    Bu bölmədə ən çox verilən suallara cavab tapa bilərsiniz.
                </p>
                <div className="pages-content">
                    {qa?.map(item => (
                        <div className={ item.checked ? "faq-accordion visible-qa" : "faq-accordion"} key={item.id} onClick={() => handleClick(item.id)}>
                            <div className="accordion-question">
                                <p className="acc-ques">{item.id}. {item.question}</p>
                                <i className='bx bx-plus-circle plus-circle' style={{color: '#b0b7c3'}}></i>
                            </div>
                            <div className="accordion-answer">
                                <p className="acc-ans">{parse(item.answer)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default FAQ