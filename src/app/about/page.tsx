"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  objectPosition?: string;
};

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const team = [
    {
      name: "Kuukua Eshun",
      role: "Founder &  President",
      image: "/images/team/kuukua-eshun.jpeg",
      objectPosition: "center 20%",
      bio: "Kuukua Eshun is a Cultural Diplomat, Ghanaian-American award-winning filmmaker, global speaker,\nand the Founder and President of Cultural Diplomat Impact Organization. Her work is rooted in\nstorytelling, social impact, and global cultural exchange, using film and dialogue as tools for healing,\nadvocacy, and transformation.\nBased between Accra and Ohio, she creates emotionally resonant visual stories exploring mental\nhealth, identity, and womanhood, shaping narratives that influence cultural ecosystems globally. Her\nacclaimed film Artist, Act of Love earned Best Visual Effect at the Worldwide Women's Film Festival\nand screened at multiple Academy Award-qualifying festivals. She also directed a short film for Wizkid's\nGrammy-nominated Made in Lagos Deluxe. Her documentary Unveiling, commissioned by the ANO\nInstitute of Arts and Knowledge, premiered at the Museum Ostwall im Dortmunder U, confronting\nsexual violence through art and advocacy, while Born of the Earth debuted at the Dakar Biennale.\nThrough the Cultural Diplomat Impact Organization, Kuukua leads initiatives focused on youth\nempowerment, education, and cultural development, equipping the next generation of African leaders\nwith tools for purpose, creativity, and global relevance.\nAs a sought-after global speaker, she has engaged over 10,000 young people worldwide, using\nstorytelling, dialogue, and creative education to inspire purpose, leadership, and social responsibility.\nShe has spoken at Ashesi University, Museum Ostwall (Germany), The Ohio State University,\nUniversity of Cincinnati, Black Star Line Festival, African Contemporary Art Biennale (Senegal),\nREVOLT Summit, KNUST, TEDx Accra, University of Ghana, and the University of Professional\nStudies.\nShe is also the founder of Filming As Woman, amplifying underrepresented voices through\ncross-border creative collaborations.\nKuukua serves on the board of GIMPA, contributing to the development of a Master's program in Arts\nand Entertainment. She supports international cultural exchange initiatives with the French and\nGerman Embassies in Ghana and is a Global Ambassador for RISE Global, founded by Eric Schmidt.\nA passionate advocate for women's rights and youth opportunity, she partners with UNFPA Ghana to\nsupport survivors of sexual violence and co-creates initiatives that expand access to education,\ncreative expression, and safe spaces for young women in Ghana",
    },
    {
      name: "Alaba Adewale Adebajo",
      role: "Chairman",
      image: "/images/team/alaba-adewale.jpeg",
      objectPosition: "center 12%",
      bio: "Mr. Ade Adebajo is a seasoned businessman, visionary leader, and ordained pastor with a\npassion for driving excellence in both the corporate and ministry spaces. He brings years of\nexperience in business development, strategic leadership, and organizational growth, with a\nproven track record of building sustainable enterprises and empowering people to thrive\nAs a business leader, Mr. Adebajo is known for his innovative thinking, practical approach to\nproblem-solving, and commitment to value creation. He has consistently championed creativity,\ndiscipline, and integrity as key pillars for success in today's evolving business environment\nIn addition to his corporate pursuits, Mr. Adebajo serves faithfully in ministry, where he\ncombines sound biblical principles with real-world insights to inspire transformation. His\nteachings emphasize purpose, leadership, restoration, and the application of faith in everyday\nlife, making his message both relatable and impactful.\nMr. Adebajo is widely respected for his ability to bridge faith and business, equipping\nindividuals, entrepreneurs, and leaders to excel professionally while remaining grounded in\nstrong moral and spiritual values",
    },
    {
      name: "Emmanuel Vitashie",
      role: "Head of Programs & Research",
      image: "/images/team/emmanuel-vitashie.jpeg",
      objectPosition: "center 16%",
      bio: "Emmanuel Vitashie is a program architect and research-driven leader, serving as Head of Programs & \nResearch at Cultural Diplomats Impact Organization (CDIO). He is known for his analytical rigor, \nsystems thinking, and ability to translate vision into structured, high-impact initiatives. \nIn his role, Emmanuel leads the design and execution of the organization's flagship programs, including \nimpact conferences, internship initiatives, and partner-led projects. He drives CDIO's research strategy \nwhile ensuring that ideas are developed into scalable, results-oriented interventions. His work sits at the \nintersection of strategy, data, and execution, enabling the delivery of innovative and measurable \noutcomes. \nHe has contributed to impacting over 3,000 students and has supported strategic collaborations with \ninstitutions such as UPSA and the Pan African Leadership Institute. With a background in Medical \nLaboratory Science and an MSc in Genetic Counselling, he brings a multidisciplinary lens to program \ndesign and research. \nEmmanuel is committed to advancing transformative leadership through well-designed systems and \ncontinues to position himself as a thought leader in program development and execution.",
    },
    {
      name: "Donkor Ebenezer Ofori",
      role: "Creative Strategist",
      image: "/images/team/donkor-ofori.jpeg",
      objectPosition: "center 18%",
      bio: "Donkor Ebenezer Ofori is a Ghanaian Creative Strategist, Cultural Diplomat, Brand Consultant, and Pioneer of Creativity and Purpose, widely recognized for shaping how. African stories are expressed, experienced, and positioned globally. From an early stage, he emerged as one of the young voices redefining visual storytelling in Ghana. His work gained recognition on platforms such as GhanaWeb, where he was highlighted as a young creative contributing to the evolution of videography and visual culture in Ghana. As the founder of Kaystudios, Donkor has built a reputation for crafting strategy driven narratives across music, fashion, film, and live experiences. His work has extended across Ghana, Nigeria, and beyond, contributing to projects that elevate artists, shape identities, and influence cultural direction. He has contributed to the creative and strategic direction of international dancehall icon Stonebwoy, playing a key role in performance concepts, rollout strategies, and cultural storytelling that resonate globally. His work and creative contributions have also been featured across multiple media and magazine platforms, further establishing his voice within the creative industry. Donkor currently serves as a Creative Strategist at the Cultural Diplomat Impact Organization (CDIO), where he leads creative direction and narrative development centered on cultural exchange, identity, and global representation. Through this role, he positions creativity as a tool for diplomacy, influence, and international connection. His portfolio includes projects such as Ghana in the Heart of London, reflecting his commitment to bridging. Africa and the diaspora through storytelling, while exporting authentic cultural narratives to the global stage. Beyond his work, Donkor is known for his depth, vision, and sense of purpose. He is passionate about building people, mentoring creatives, and raising a generation that understands creativity not just as art, but as responsibility, influence, and impact. He is widely respected for his ability to merge creativity with strategy, and purpose with execution. His work is driven by a clear belief that creativity is a force for transformation, capable of shaping perception, building legacy, and impacting nations.",
    },
    {
      name: "Christabel Badagbor",
      role: " Head of Operations",
      image: "/images/team/christabel-badagbor.jpeg",
      bio: "Christabel Badagbor is a visionary leader and dynamic operations strategist, currently serving as \nthe Head of Operations for Cultural Diplomats. Renowned for her creativity, precision, and strong \nleadership, she plays a pivotal role in shaping and executing impact-driven initiatives that foster \ncultural engagement, leadership development, and community transformation.\nAs an active member of the Cultural Diplomats Group, Christabel is deeply committed to \nadvancing programs that inspire dialogue, celebrate identity, and empower the next generation \nof leaders. She brings a unique blend of artistry and structure to her work, ensuring that every \nproject is not only innovative but also strategically executed for lasting impact.\nIn her role, she oversees operations and logistics with exceptional attention to detail, \ncoordinating complex processes and leading teams to deliver seamless, high-quality events and \ninitiatives. Her ability to translate vision into action has made her an invaluable force behind the \nsuccess of numerous programs.\nDriven by purpose and excellence, Christabel is passionate about creating meaningful \nexperiences that connect people, amplify culture, and inspire change. Her work reflects a deep \ncommitment to impact, a flair for creativity, and a relentless pursuit of excellence in every space she occupies.",
    },
    {
      name: "Nicolette Noi",
      role: "Operations Coordinator",
      image: "/images/team/nicolette-noi.jpeg",
      objectPosition: "center 18%",
      bio: "Nicolette Noi is an administrative professional with a strong interest in organizational \nmanagement, cultural engagement, and impact-driven initiatives. She currently serves as a \nmember of the Cultural Diplomats Group, where she contributes to the planning and execution \nof programs that promote cultural exchange, leadership, and community development. \nDuring the Cultural Diplomats Group's recent impact program at the University of Professional \nStudies, Accra (UPSA), Nicolette played a key role in operations, logistics coordination, and \nprotocol management. She worked closely with the organizing team to ensure the smooth \nplanning and execution of the event, overseeing logistical arrangements, coordinating \nadministrative processes, and supporting overall program organization. \nWith a keen eye for detail and a collaborative approach, Nicolette is passionate about creating \nwell-structured events and initiatives that foster learning, cultural dialogue, and meaningful \nimpact within communities.",
    },
    {
      name: "Emmanuel Selormey",
      role: "Head of Production",
      image: "/images/team/emmanuel-selormey.png",
      objectPosition: "center 15%",
      bio: "Emmanuel Selormey, popularly known as Selorm, is a Ghanaian filmmaker, producer, and media entrepreneur who works \nacross video direc ng, anima on, photography, cinematography (DOP), edi ng, and crea ve storytelling. He is the \nfounder of Synma on Studios, a media produc on company built on the idea of telling meaningful visual stories for brands, \nins tu ons, and cultural ini a ves. \nHis journey in film and media began with curiosity and hands-on experience, which later grew into formal training at the \nNa onal Film and Television Ins tute (NAFTI) in Ghana. There, he built a strong founda on in filmmaking, storytelling, and \nvisual communica on, shaping the way he approaches every project today. \nOver the years, Selorm has grown into a producer who leads with trust, consistency, and responsibility, working across \nboth commercial and ins tu onal spaces. He currently serves as the Head of Produc on at Cultural Diplomats Impact \nOrganiza on (CDIO), where he leads produc on work centered on cultural exchange, iden ty, and impact driven storytelling. \nHe also works as the Produc on Lead at Mega6 Games and serves as a Video Produc on Consultant for the Securi es and \nExchange Commission, suppor ng visual communica on and ins tu onal storytelling. \nSelorm has collaborated with crea ve agencies such as Empire Ghana and iD8, contribu ng to major campaigns including \nTotalEnergies projects and Enterprise Insurance television commercials. His work also includes a television commercial \nfor Kibo, as well as documentary produc ons for the Ministry of Energy and the Ministry of Finance, helping translate \nimportant na onal stories into visual form. \nAlongside tradi onal produc on work, Selorm has also developed strong skills in AI driven image and video crea on, using \nmodern tools to support crea ve development, experimenta on, and produc on efficiency while maintaining storytelling \nquality. \nHe is widely known not just for his work, but for the trust he builds with people and ins tu ons, and the calm, reliable way \nhe delivers even under pressure. He is also a fast learner, constantly growing, adap ng, and refining his cra in a fast \nchanging crea ve world. \nAt the heart of everything he does is a simple belief: storytelling should mean something. His work is driven by a desire to \ncreate honest, human, and impac ul visual stories that connect people, reflect culture, and leave a las ng feeling long \na er the screen fades.",
    },

  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-blue text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gold">CDIO</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Building tomorrow's leaders with faith, innovation, and purpose
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-gold/30 bg-gold/5"
            >
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower emerging leaders and entrepreneurs through mentorship, education, and faith-based
leadership development.
            </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-gold/30 bg-gold/5"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To raise a generation of culturally grounded, purpose-driven leaders who transform communities
and influence the world through entrepreneurship, innovation, and faith.
              </p>
            </motion.div>
          </div>

          {/* Founding Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-6">
              Our <span className="text-gold">Story</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Founded in 2026, CDIO was established with a vision to empower young leaders through faith-based mentorship,
              entrepreneurship, and cultural diplomacy initiatives across Africa.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-6">
              Our <span className="text-gold">Values</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Faith", icon: "⛪", desc: "Guided by spiritual principles" },
              { title: "Excellence", icon: "⭐", desc: "Highest standards in all we do" },
              { title: "Innovation", icon: "💡", desc: "Creative solutions for change" },
              { title: "Community", icon: "🤝", desc: "Lifting each other up" },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gold/10 border border-gold/30 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-deep-blue mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-deep-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Meet Our <span className="text-gold">Leadership Team</span>
            </h2>
            <p className="text-gray-600">
              Experienced leaders dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -20 }}
                className="p-6 rounded-xl bg-white border border-gold/30 text-center hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    draggable={false}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition || "center" }}
                  />
                </div>
                <h4 className="font-bold text-deep-blue mb-1">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="text-center w-full font-bold text-deep-blue hover:text-gold cursor-pointer transition-colors"
                    aria-label={`View full bio for ${member.name}`}
                  >
                    {member.name}
                  </button>
                </h4>
                <p className="text-gold text-sm font-bold mb-3">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full bio */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-deep-blue">{selectedMember.name}</h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 h-64 bg-gold/10 rounded-lg overflow-hidden">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    draggable={false}
                    className="object-cover"
                    style={{ objectPosition: selectedMember.objectPosition || "center" }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gold font-semibold mb-4">{selectedMember.role}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
