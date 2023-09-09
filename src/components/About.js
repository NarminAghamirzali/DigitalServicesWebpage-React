import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about">
            <div className="pages-header">
                <ul className="pages-nav">
                    <li className="pages-headings">
                        <Link to="/">Ana səhifə</Link>
                        <i className='bx bx-chevron-right'></i>
                    </li>
                    <li className="pages-headings" style={{color: "#6c788f"}}>
                        <Link to="/about">Haqqımızda</Link>
                    </li>
                </ul>
            </div>
            <div className="pages-content-container">
                <h3 className="pages-heading">
                    Haqqımızda
                </h3>
                <p className="pages-info">
                    Bu bölmədə haqqımızda məlumat tapa bilərsiniz.
                </p>
                <div className="pages-content">
                    <p className="about-content">“Rəqəmsal İcra Hakimiyyəti” portalının yaradılmasında əsas məqsəd yerli icra hakimiyyətlərinin xidmətlərinin elektronlaşdırılması, data əsaslı çevik idarəetmə, vətəndaş məmnuniyyəti və xidmət keyfiyyətinin yaxşılaşdırılmasının təmin olunmasıdır. Portal həm yerli icra hakimiyyəti orqanlarının əməkdaşları, həm də vətəndaşların vaxt və resurslarına qənaət etməyə kömək edəcək. Burada həmçinin, dövlət xidmətlərinin göstərilməsində vətəndaş iştirakının təmin olunması nəzərdə tutulub, bu məqsədlə portalda xüsusi bölmə yaradılıb. “Rəqəmsal İcra Hakimiyyəti” portalı vasitəsilə regionlarda yerli icra hakimiyyətləri tərəfindən göstərilən xidmətlər arasında elektronlaşdırılması mümkün olan xidmətlər vətəndaşlara onlayn rejimdə təqdim edilir. Regionlarda rəqəmsal hökumət quruculuğu çərçivəsində başlanan bu layihənin tətbiq olunması üçün ilkin mərhələdə Gəncə şəhəri, Masallı və Quba rayonları olmaqla 3 sosial-iqtisadi aktiv rayon seçilib və 22 noyabr 2021-ci il tarixindən etibarən portal istifadəyə verilib. 1 mart 2022-ci il tarixində Azərbaycan Respublikasının bütün yerli icra hakimiyyətləri orqanlarının  “Rəqəmsal İcra Hakimiyyəti” portalına inteqrasiyası tamamlanmışdır.  </p>
                </div>
            </div>
        </section>
  )
}

export default About