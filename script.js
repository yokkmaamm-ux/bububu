const branches = ['DGA', 'DGD', 'IGD', 'AFX', 'DEN'];

const scenes = [
  {
    id: '1.1', chapter: 'บทที่ 1 · ตื่นขึ้นในเมืองไร้สี', title: 'ฉาก 1.1 ตื่นขึ้นมา',
    context: 'ทุกอย่างรอบตัวเธอเป็นสีเทา แต่มือของเธอยังขยับได้ และยังมีอะไรให้ทำอีกเยอะ',
    prompt: 'ดวงไฟลอยมาใกล้ ๆ แล้วกระซิบว่า “เหลือเวลาถึงคืนนี้เท่านั้นนะ ช่วยเมืองนี้ด้วย” สิ่งแรกที่เธอทำคือ...',
    choices: [
      { text: 'หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง', branch: 'DGA' },
      { text: 'เดินดูป้ายที่ตัวอักษรซีดจนอ่านไม่ออก แล้วลองจัดใหม่ให้อ่านง่ายขึ้น', branch: 'DGD' },
      { text: 'ถามดวงไฟว่าเมืองนี้มีกติกาอะไร แล้วจะผ่านด่านไปได้ยังไง', branch: 'IGD' },
      { text: 'ลองดันของรอบตัวเบา ๆ ว่าทำไมทุกอย่างถึงนิ่งสนิทแบบนี้', branch: 'AFX' },
      { text: 'ตะโกนเรียกคนในเมืองให้มารวมกันที่จัตุรัส', branch: 'DEN' }
    ]
  },
  {
    id: '1.2', chapter: 'บทที่ 1 · ตื่นขึ้นในเมืองไร้สี', title: 'ฉาก 1.2 ของติดตัว',
    prompt: 'ดวงไฟบอกว่าพกไปได้แค่ชิ้นเดียว เธอเลือกหยิบ...',
    choices: [
      { text: 'สมุดสเก็ตช์ที่วาดได้ไม่มีวันหมดหน้า', branch: 'DGA' },
      { text: 'ชุดสีและตัวอักษรวิเศษที่ทำให้อะไรก็ดูเข้าที่เข้าทาง', branch: 'DGD' },
      { text: 'ตลับเกมเก่า ๆ ที่ยังไม่มีใครรู้วิธีเล่น', branch: 'IGD' },
      { text: 'กล้องฟิล์มที่ถ่ายแล้วภาพเคลื่อนไหวได้', branch: 'AFX' },
      { text: 'ไมโครโฟนที่เสียงดังไปทั่วทั้งเมือง', branch: 'DEN' }
    ]
  },
  {
    id: '1.3', chapter: 'บทที่ 1 · ตื่นขึ้นในเมืองไร้สี', title: 'ฉาก 1.3 ทางแยกห้าสาย',
    context: 'ปลายจัตุรัสมีถนนห้าสาย แต่ละสายมีกลิ่นกับเสียงไม่เหมือนกัน',
    prompt: 'เธอเดินเข้าสายไหนก่อน',
    choices: [
      { text: 'สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด', branch: 'DGA' },
      { text: 'สายที่เต็มไปด้วยป้ายร้านและโลโก้', branch: 'DGD' },
      { text: 'สายที่มีเสียงเกมกับแสงไฟหลากสี', branch: 'IGD' },
      { text: 'สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์', branch: 'AFX' },
      { text: 'สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน', branch: 'DEN' }
    ]
  },
  {
    id: '2.1', chapter: 'บทที่ 2 · ปัญหาของชาวเมือง', title: 'ฉาก 2.1 สะพานที่พังครึ่งหนึ่ง',
    context: 'เดินไปได้ไม่กี่ก้าว เธอก็เจอคนที่ต้องการความช่วยเหลือทุกมุมถนน',
    prompt: 'สะพานข้ามแม่น้ำพังไปครึ่งทาง ฝั่งโน้นมีคนรออยู่ เธอจะข้ามไปยังไง',
    choices: [
      { text: 'วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของเธอ', branch: 'DGA' },
      { text: 'ทำป้ายเตือนกับป้ายบอกทางอ้อม ให้ทุกคนเดินตามได้โดยไม่งง', branch: 'DGD' },
      { text: 'ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง', branch: 'IGD' },
      { text: 'ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองขึ้นมาให้ทุกคนเห็น', branch: 'AFX' },
      { text: 'ชวนชาวเมืองมาช่วยกันซ่อม แล้วจัดเป็นงานฉลองเล็ก ๆ', branch: 'DEN' }
    ]
  },
  {
    id: '2.2', chapter: 'บทที่ 2 · ปัญหาของชาวเมือง', title: 'ฉาก 2.2 เด็กน้อยร้องไห้',
    prompt: 'เด็กคนหนึ่งนั่งร้องไห้อยู่ข้างทาง เธอบอกว่าตัวการ์ตูนที่รักที่สุดหายไปจากเมืองแล้ว เธอช่วยหนูน้อยยังไง',
    choices: [
      { text: 'วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้', branch: 'DGA' },
      { text: 'ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เธอเก็บไว้', branch: 'DGD' },
      { text: 'สร้างเกมเล็ก ๆ ให้เธอได้เล่นกับตัวการ์ตูนตัวนั้น', branch: 'IGD' },
      { text: 'ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดกับเธอได้', branch: 'AFX' },
      { text: 'ชวนเด็ก ๆ คนอื่นมานั่งล้อมวงฟังเรื่องของตัวการ์ตูนตัวนั้น', branch: 'DEN' }
    ]
  },
  {
    id: '2.3', chapter: 'บทที่ 2 · ปัญหาของชาวเมือง', title: 'ฉาก 2.3 ร้านเก่าแก่ที่ใกล้ปิด',
    prompt: 'เจ้าของร้านเก่าแก่เล่าว่าไม่มีใครรู้จักร้านเขาแล้ว เธอตอบเขาว่า...',
    choices: [
      { text: '“หนูจะวาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร”', branch: 'DGA' },
      { text: '“หนูจะทำแบรนด์ใหม่ให้ ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน”', branch: 'DGD' },
      { text: '“หนูจะทำให้การเดินเข้าร้านเป็นเหมือนเล่นเกมสนุก ๆ”', branch: 'IGD' },
      { text: '“หนูจะทำคลิปแนะนำร้านที่ดูแล้วขนลุก”', branch: 'AFX' },
      { text: '“หนูจะจัดงานแล้วช่วยโปรโมต ให้คนแห่กันมา”', branch: 'DEN' }
    ]
  },
  {
    id: '3.0', chapter: 'ด่านทดสอบหน้าประตูหินผา', title: 'ด่านทดสอบหน้าประตูหินผา',
    context: 'ไม่ว่าเธอจะเดินมาจากย่านไหน ทุกคนต้องเจอประตูหินบานใหญ่ก่อนไปต่อ',
    prompt: 'ประตูถามว่า “เธอพร้อมฝึกอะไรทุกวัน”',
    choices: [
      { text: 'วาดรูปและสังเกตโลกรอบตัวให้ละเอียดขึ้น', branch: 'DGA' },
      { text: 'จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว', branch: 'DGD' },
      { text: 'คิดเป็นระบบ เป็นขั้นเป็นตอน', branch: 'IGD' },
      { text: 'ทำให้ภาพเคลื่อนไหวและดูสมจริง', branch: 'AFX' },
      { text: 'พูด เล่าเรื่อง และประสานคนให้ไปทางเดียวกัน', branch: 'DEN' }
    ]
  },
  {
    id: '4.1', chapter: 'บทที่ 4 · เพื่อนร่วมทาง', title: 'ฉาก 4.1 เจอเพื่อนสี่คน',
    context: 'ประตูหินเปิดออก และเธอไม่ได้เดินต่อคนเดียวอีกแล้ว',
    prompt: 'ที่ลานน้ำพุ เธอเจอนักเดินทางอีกสี่คน แต่ละคนมีของที่ตัวเองยังทำไม่ได้ เธอเลือกเป็นคนที่...',
    choices: [
      { text: 'ช่วยวาดภาพให้ทุกคนเห็นตรงกัน', branch: 'DGA' },
      { text: 'ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ', branch: 'DGD' },
      { text: 'คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก', branch: 'IGD' },
      { text: 'ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาหน้าตาเป็นยังไง', branch: 'AFX' },
      { text: 'เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อไปด้วยกัน', branch: 'DEN' }
    ]
  },
  {
    id: '4.2', chapter: 'บทที่ 4 · เพื่อนร่วมทาง', title: 'ฉาก 4.2 เพื่อนเห็นไม่ตรงกัน',
    prompt: 'กลางทางมีสองแยก ทีมเถียงกันว่าจะไปทางไหน เธอทำอะไร',
    choices: [
      { text: 'วาดแผนที่ให้เห็นภาพว่าแต่ละทางไปไหนบ้าง', branch: 'DGA' },
      { text: 'ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น', branch: 'DGD' },
      { text: 'เสนอให้ลองไปทั้งสองทางแล้วดูผลลัพธ์', branch: 'IGD' },
      { text: 'ทำภาพจำลองให้เห็นว่าปลายทางของแต่ละทางเป็นยังไง', branch: 'AFX' },
      { text: 'ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้', branch: 'DEN' }
    ]
  },
  {
    id: '5.1', chapter: 'บทที่ 5 · คืนเทศกาล', title: 'ฉาก 5.1 ขึ้นเวที',
    context: 'ฟ้ามืดลงแล้ว ไฟทั่วเมืองเริ่มติด เหลือแค่เวทีใหญ่ที่ยังว่างอยู่',
    prompt: 'เวทีว่างเปล่ากำลังรอเธออยู่ ไฮไลต์ที่เธออยากมอบให้ทั้งเมืองคือ...',
    choices: [
      { text: 'ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง', branch: 'DGA' },
      { text: 'ภาพลักษณ์ใหม่ของเมือง ที่ทำให้ทุกมุมดูมีสไตล์เดียวกัน', branch: 'DGD' },
      { text: 'เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน', branch: 'IGD' },
      { text: 'โชว์ภาพเคลื่อนไหวกับเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง', branch: 'AFX' },
      { text: 'การแสดงสดที่ทุกคนมีส่วนร่วมได้', branch: 'DEN' }
    ]
  },
  {
    id: '5.2', chapter: 'บทที่ 5 · คืนเทศกาล', title: 'ฉาก 5.2 สีกลับมาแล้ว',
    prompt: 'เมื่อสีค่อย ๆ กลับมาทั่วเมือง ผู้คนหันมามองเธอ เธออยากให้พวกเขาจำเธอว่าเป็นใคร',
    choices: [
      { text: 'คนที่ให้กำเนิดตัวละครที่ทุกคนรัก', branch: 'DGA' },
      { text: 'คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์', branch: 'DGD' },
      { text: 'คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น', branch: 'IGD' },
      { text: 'คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง', branch: 'AFX' },
      { text: 'คนที่ทำให้ทุกคนมารวมกันได้', branch: 'DEN' }
    ]
  }
];

const districts = {
  DGA: {
    name: 'ย่านศิลป์: ตรอกจินตนาการ',
    intro: 'ศิลปินสูงวัยคนหนึ่งยื่นขวดสีวิเศษให้ แล้วถามว่า “เธออยากเป็นคนแบบไหนในเมืองนี้”',
    choices: [
      ['คนที่สร้างตัวละครให้ทั้งโลกจำได้', 'Character Designer'],
      ['คนที่วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต', 'Concept Artist / Background Artist'],
      ['คนที่เล่าเรื่องด้วยภาพหลายช่อง', 'Webtoon / Comic / Storyboard Artist'],
      ['คนที่ทำให้ภาพวาดกลายเป็นสินค้าหรือของสะสม', 'Illustrator / Art Toy / Sticker Creator']
    ]
  },
  DGD: {
    name: 'ย่านดีไซน์: ถนนเอกลักษณ์',
    intro: 'นักออกแบบคนหนึ่งยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า แล้วถามว่า “ถ้าได้ฝากลายเซ็นไว้ที่ไหนสักแห่งในเมืองนี้ เธออยากให้เป็นที่ไหน”',
    choices: [
      ['ป้ายและโลโก้ที่ทุกคนเห็นทุกวัน', 'Brand Identity Designer'],
      ['หน้าจอแอปและเว็บไซต์ของเมือง', 'UI Designer'],
      ['กล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บไว้', 'Packaging Designer'],
      ['โปสเตอร์ใหญ่กลางเมืองที่คนเดินผ่านแล้วต้องหันมอง', 'Art Director / Key Visual Designer']
    ]
  },
  IGD: {
    name: 'ย่านเกม: สนามแห่งการเล่น',
    intro: 'หัวหน้าสนามเกมเดินมาหา แล้วถามว่า “เกมของเธอจะเริ่มจากอะไร”',
    choices: [
      ['คิดกติกาและระบบให้คนเล่นแล้วติดใจ', 'Game Designer / Level Designer'],
      ['ออกแบบฉากและตัวละครในเกม', 'Game Artist'],
      ['สร้างโลกเสมือนที่เดินเข้าไปได้จริง', 'VR / AR Designer'],
      ['ดูแลทีมให้เกมไปถึงมือผู้เล่นได้', 'Game Producer']
    ]
  },
  AFX: {
    name: 'ย่านภาพยนตร์: กำแพงแห่งเรื่องราว',
    intro: 'ผู้กำกับลึกลับคนหนึ่งยื่นสคริปต์มาให้ แล้วถามว่า “เธออยากคุมฉากไหนของหนังเรื่องนี้”',
    choices: [
      ['ตัวละครที่ขยับเหมือนมีชีวิตจริง', '3D Animator / Rigging Artist'],
      ['ของและตัวละครที่ปั้นขึ้นมาจากความว่างเปล่า', '3D Modeler / Texture Artist'],
      ['ฉากระเบิด ไฟ น้ำ ควัน ที่ทำให้คนดูตกใจ', 'VFX Artist'],
      ['การรวมทุกชั้นภาพให้ดูเหมือนถ่ายจริงชิ้นเดียว', 'Compositor']
    ]
  },
  DEN: {
    name: 'ย่านบันเทิง: เวทีแห่งตัวตน',
    intro: 'พิธีกรประจำเมืองยื่นไมค์มาให้ แล้วถามว่า “บทบาทไหนทำให้เธอใจเต้นแรงที่สุด”',
    choices: [
      ['คนคิดรายการและคอนเทนต์ที่ทุกคนรอดูทุกสัปดาห์', 'Content Creator / Scriptwriter'],
      ['คนจัดงานที่ทำให้คนนับพันได้ประสบการณ์เดียวกัน', 'Event / Show Producer'],
      ['คนเบื้องหลังตัวตนเสมือนและสตรีมเมอร์', 'Virtual Talent / Streaming Producer'],
      ['คนที่ทำให้ชุมชนแฟนคลับเติบโต', 'Entertainment Marketer / Community Manager']
    ]
  }
};

const profiles = {
  DGA: {
    title: 'นักรังสรรค์จินตนาการ',
    summary: 'ภาพวาดของเธอคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดตรงกันว่า “นี่แหละโลกที่เราเคยฝันถึง”',
    school: 'Digital Arts',
    jobs: ['Illustrator', 'Concept Artist', 'Character Designer', 'Webtoon / Comic Artist', 'Storyboard Artist', 'Background Artist', 'Art Toy Designer', 'Sticker / LINE Creator', 'Children’s Book Illustrator', 'Visual Development Artist']
  },
  DGD: {
    title: 'นักสร้างอัตลักษณ์แห่งธานี',
    summary: 'ภาพลักษณ์ใหม่ที่เธอออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง ไม่มีใครสับสนอีกแล้วว่าที่นี่คือที่ไหน',
    school: 'Digital Graphic Design',
    jobs: ['Graphic Designer', 'Brand Identity Designer', 'Art Director', 'UI Designer', 'Packaging Designer', 'Editorial Designer', 'Social Media Designer', 'Motion Graphic Designer', 'Poster / Key Visual Designer', 'Creative Director']
  },
  IGD: {
    title: 'นักสร้างเป้าหมายแห่งเกม',
    summary: 'ทั้งเมืองกลายเป็นสนามเล่นของเธอ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ',
    school: 'Interactive and Game Design',
    jobs: ['Game Designer', 'Level Designer', 'Game Artist', 'UI/UX Designer for Games', 'VR / AR Designer', 'Game Producer', 'Narrative Designer', 'Technical Artist', 'Playtest Designer', 'Esports Content Producer']
  },
  AFX: {
    title: 'ผู้มอบชีวิตแด่ภาพ',
    summary: 'ภาพเคลื่อนไหวของเธอทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้เป็นฝีมือคนคนเดียว',
    school: 'Computer Animation and Visual Effects',
    jobs: ['3D Animator', '3D Modeler', 'VFX Artist', 'Compositor', 'Rigging Artist', 'Lighting Artist', 'Texture Artist', 'Motion Capture Artist', 'Layout / Previs Artist', 'Visual Effects Supervisor']
  },
  DEN: {
    title: 'ผู้รวมใจให้เป็นหนึ่ง',
    summary: 'เธอไม่ได้ขึ้นเวทีคนเดียว เธอทำให้ทั้งเมืองได้ขึ้นเวทีไปพร้อมกัน',
    school: 'Digital Entertainment',
    jobs: ['Content Creator', 'Event / Show Producer', 'Streaming Producer', 'VTuber / Virtual Talent Producer', 'Entertainment Marketer', 'Social Media Manager', 'Video Producer', 'Community Manager', 'Scriptwriter', 'Brand Experience Designer']
  }
};

const mixedTitles = {
  'DGA+DGD': 'นักออกแบบที่เล่าเรื่องด้วยภาพวาด',
  'AFX+DGD': 'นักออกแบบที่ทำให้ภาพขยับ',
  'DGD+IGD': 'นักออกแบบประสบการณ์',
  'DEN+DGD': 'นักออกแบบที่เล่าเรื่องเก่ง',
  'AFX+DGA': 'นักวาดที่ทำให้ภาพมีชีวิต',
  'DGA+IGD': 'นักวาดโลกของเกม',
  'DGA+DEN': 'ครีเอเตอร์สายวาด',
  'AFX+IGD': 'นักสร้างโลกเสมือนจริง',
  'AFX+DEN': 'นักเล่าเรื่องด้วยภาพยนตร์',
  'DEN+IGD': 'นักสร้างสนามเล่นให้คนมารวมกัน'
};

const state = {
  sceneIndex: 0,
  scores: Object.fromEntries(branches.map((branch) => [branch, 0])),
  answers: {},
  districtBranches: [],
  districtIndex: 0,
  districtAnswers: {},
  passAnswers: {}
};

const welcomeScreen = document.getElementById('welcomeScreen');
const gameScreen = document.getElementById('gameScreen');
const sceneContent = document.getElementById('sceneContent');
const progressFill = document.getElementById('progressFill');
const progressCount = document.getElementById('progressCount');
const progressLabel = document.getElementById('progressLabel');
const progressBar = document.querySelector('[role="progressbar"]');
const privacyNote = document.getElementById('privacyNote');

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeButton(text, action, className = 'button button-primary') {
  const button = makeElement('button', className, text);
  button.type = 'button';
  button.addEventListener('click', action);
  return button;
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function updateProgress(label = 'การเดินทางของเธอ') {
  const answered = Object.keys(state.answers).length;
  const percent = (answered / scenes.length) * 100;
  progressLabel.textContent = label;
  progressCount.textContent = `${answered} / ${scenes.length}`;
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', String(answered));
}

function showGame() {
  welcomeScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  gameScreen.scrollIntoView?.({ behavior: 'smooth', block: 'start' });
}

function renderOpening() {
  showGame();
  updateProgress('ก่อนออกเดินทาง');
  sceneContent.replaceChildren();
  sceneContent.append(
    makeElement('p', 'chapter-label', 'ก่อนออกเดินทาง'),
    makeElement('h2', 'scene-title', 'Imagine City กำลังจะเสียสีสัน'),
  );
  const copy = makeElement('div', 'dialogue-copy');
  copy.append(
    makeElement('p', '', 'Imagine City เคยเป็นเมืองที่เต็มไปด้วยภาพวาด ป้ายไฟ เสียงเพลง และเกมที่ใครก็เล่นได้ แต่ตอนนี้ทุกอย่างซีดเป็นสีเทา เหลือเวลาอีกแค่คืนเดียวก่อนที่สีจะหายไปตลอดกาล'),
    makeElement('p', '', 'ถ้ามีใครขึ้นเวทีในเทศกาล Imagine Design Event แล้วทำให้คนทั้งเมืองกลับมายิ้มได้ สีทั้งหมดก็จะกลับมา'),
    makeElement('p', '', 'เธอตื่นขึ้นกลางจัตุรัสโดยไม่รู้ว่ามาได้ยังไง ตรงหน้ามีดวงไฟดวงเล็ก ๆ ลอยอยู่ มันบอกว่าจะนำทางให้ แต่ต้องให้เธอเป็นคนตัดสินใจเองทุกอย่าง')
  );
  sceneContent.append(copy, makeButton('เริ่มการเดินทาง', () => renderScene()));
  focusScene();
}

function focusScene() {
  sceneContent.focus({ preventScroll: true });
}

function renderScene() {
  const scene = scenes[state.sceneIndex];
  const isLastScene = state.sceneIndex === scenes.length - 1;
  updateProgress(`ฉากที่ ${state.sceneIndex + 1} จาก ${scenes.length}`);
  sceneContent.replaceChildren();
  sceneContent.append(makeElement('p', 'chapter-label', scene.chapter));
  sceneContent.append(makeElement('h2', 'scene-title', scene.title));
  if (scene.context) sceneContent.append(makeElement('p', 'scene-context', scene.context));
  sceneContent.append(makeElement('p', 'scene-prompt', scene.prompt));

  const answerList = makeElement('div', 'answer-list');
  answerList.setAttribute('role', 'group');
  answerList.setAttribute('aria-label', scene.prompt);
  shuffle(scene.choices).forEach((choice) => {
    const answer = makeElement('button', 'answer');
    answer.type = 'button';
    answer.setAttribute('aria-pressed', 'false');
    answer.append(makeElement('span', 'answer-marker'), makeElement('span', '', choice.text));
    answer.addEventListener('click', () => selectSceneAnswer(answerList, answer, choice));
    answerList.append(answer);
  });
  sceneContent.append(answerList);

  const selectionMessage = makeElement('p', 'selection-message');
  selectionMessage.setAttribute('aria-live', 'polite');
  sceneContent.append(selectionMessage);
  const action = makeElement('div', 'scene-actions');
  const nextButton = makeButton(isLastScene ? 'ไปยังบัตรผ่านนักเดินทาง' : 'เดินทางต่อ', () => advanceScene(), 'button button-primary');
  nextButton.disabled = true;
  action.append(nextButton);
  sceneContent.append(action);
  focusScene();
}

function selectSceneAnswer(answerList, selectedButton, choice) {
  if (state.answers[scenes[state.sceneIndex].id]) return;
  state.answers[scenes[state.sceneIndex].id] = choice;
  state.scores[choice.branch] += 1;
  answerList.querySelectorAll('.answer').forEach((button) => {
    button.disabled = true;
    button.setAttribute('aria-pressed', String(button === selectedButton));
  });
  sceneContent.querySelector('.selection-message').textContent = 'เลือกเส้นทางนี้แล้ว';
  sceneContent.querySelector('.scene-actions button').disabled = false;
  updateProgress();
}

function advanceScene() {
  if (!state.answers[scenes[state.sceneIndex].id]) return;
  if (state.sceneIndex === 5) {
    renderDistrictIntro();
    return;
  }
  if (state.sceneIndex === scenes.length - 1) {
    renderPassForm();
    return;
  }
  state.sceneIndex += 1;
  renderScene();
}

function rankedBranches() {
  return [...branches].sort((first, second) => state.scores[second] - state.scores[first]);
}

function determineDistrictBranches() {
  const ranked = rankedBranches();
  return state.scores[ranked[0]] - state.scores[ranked[1]] <= 1 ? ranked.slice(0, 2) : ranked.slice(0, 1);
}

function renderDistrictIntro() {
  state.districtBranches = determineDistrictBranches();
  state.districtIndex = 0;
  updateProgress('ย่านของเธอ');
  sceneContent.replaceChildren(
    makeElement('p', 'chapter-label', 'บทที่ 3 · ย่านของเธอ'),
    makeElement('h2', 'scene-title', 'ย่านที่ใกล้ตัวเธอที่สุด'),
    makeElement('p', 'scene-context', 'ดวงไฟพาเธอเดินเข้าไปในย่านที่ใกล้ตัวเธอที่สุด'),
    makeElement('p', 'district-intro', 'ในเว็บจริงจะมีให้เห็นแค่ย่านเดียว หรือสองย่านถ้าเธอลังเลระหว่างสองทาง'),
    makeButton('เข้าไปในย่าน', () => renderDistrictChoice())
  );
  focusScene();
}

function renderDistrictChoice() {
  const branch = state.districtBranches[state.districtIndex];
  const district = districts[branch];
  updateProgress(`ย่านที่ ${state.districtIndex + 1} จาก ${state.districtBranches.length}`);
  sceneContent.replaceChildren(
    makeElement('p', 'chapter-label', `บทที่ 3 · ${district.name}`),
    makeElement('h2', 'scene-title', district.name),
    makeElement('p', 'district-intro', district.intro),
    makeElement('p', 'district-choice-title', 'เธออยากเป็นคนแบบไหนในย่านนี้')
  );

  const answers = makeElement('div', 'answer-list');
  answers.setAttribute('role', 'group');
  answers.setAttribute('aria-label', district.name);
  shuffle(district.choices).forEach(([text, occupation]) => {
    const button = makeElement('button', 'answer');
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.append(makeElement('span', 'answer-marker'), makeElement('span', '', text));
    button.addEventListener('click', () => {
      answers.querySelectorAll('.answer').forEach((item) => {
        item.disabled = true;
        item.setAttribute('aria-pressed', String(item === button));
      });
      state.districtAnswers[branch] = occupation;
      sceneContent.querySelector('.selection-message').textContent = occupation;
      sceneContent.querySelector('.scene-actions button').disabled = false;
    });
    answers.append(button);
  });
  sceneContent.append(answers);
  const message = makeElement('p', 'selection-message');
  message.setAttribute('aria-live', 'polite');
  const actions = makeElement('div', 'scene-actions');
  const next = makeButton('เลือกอาชีพนี้', () => advanceDistrict(), 'button button-primary');
  next.disabled = true;
  actions.append(next);
  sceneContent.append(message, actions);
  focusScene();
}

function advanceDistrict() {
  if (!state.districtAnswers[state.districtBranches[state.districtIndex]]) return;
  state.districtIndex += 1;
  if (state.districtIndex < state.districtBranches.length) {
    renderDistrictChoice();
    return;
  }
  state.sceneIndex = 6;
  renderScene();
}

function createField(label, name, options) {
  const wrapper = makeElement('label', 'form-field');
  wrapper.append(makeElement('span', 'field-label', label));
  if (options) {
    const select = makeElement('select', 'select-input');
    select.name = name;
    select.append(new Option('เลือกได้ตามสะดวก', ''));
    options.forEach((option) => select.append(new Option(option, option)));
    wrapper.append(select);
  } else {
    const input = makeElement('input', 'text-input');
    input.name = name;
    input.type = 'text';
    wrapper.append(input);
  }
  return wrapper;
}

function createCheckField(label, name, options, maxSelections) {
  const fieldset = makeElement('fieldset', 'check-fieldset');
  fieldset.append(makeElement('legend', '', label));
  const list = makeElement('div', 'check-list');
  options.forEach((option) => {
    const row = makeElement('label', 'check-row');
    const checkbox = makeElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = name;
    checkbox.value = option;
    row.append(checkbox, makeElement('span', '', option));
    list.append(row);
  });
  if (maxSelections) {
    list.addEventListener('change', (event) => {
      const checked = list.querySelectorAll('input:checked');
      if (checked.length > maxSelections) event.target.checked = false;
    });
  }
  fieldset.append(list);
  return fieldset;
}

function renderPassForm() {
  updateProgress('บัตรผ่านนักเดินทาง');
  privacyNote.classList.remove('hidden');
  sceneContent.replaceChildren(
    makeElement('p', 'chapter-label', 'ประตูสุดท้าย · บัตรผ่านนักเดินทาง'),
    makeElement('h2', 'scene-title', 'ก่อนก้าวขึ้นเวทีใหญ่'),
    makeElement('p', 'scene-context', 'ผู้เฝ้าประตูขอดูบัตรผ่านสักใบ กรอกเท่าที่สะดวกได้เลย ข้อไหนไม่อยากตอบก็ข้ามได้')
  );

  const form = makeElement('form', 'pass-form');
  form.noValidate = true;
  const grid = makeElement('div', 'form-grid');
  grid.append(
    createField('1. ชื่อเล่นของเธอ', 'nickname'),
    createField('2. ตอนนี้เรียนอยู่ชั้นไหน', 'schoolLevel', ['ม.4', 'ม.5', 'ม.6', 'ปวช.', 'ปวส.', 'อื่น ๆ']),
    createField('3. เรียนสายอะไรอยู่', 'studyTrack', ['ศิลป์-คำนวณ', 'ศิลป์-ภาษา', 'วิทย์-คณิต', 'สายอาชีพ', 'อื่น ๆ']),
    createField('4. อยู่จังหวัดอะไร', 'province')
  );
  form.append(grid);
  form.append(
    createField('5. รู้จักคณะนี้จากที่ไหน', 'discovery', ['Facebook', 'Instagram', 'TikTok', 'เพื่อนหรือรุ่นพี่', 'ครูแนะแนว', 'งานกิจกรรม', 'อื่น ๆ']),
    createCheckField('6. เลือกคณะโดยดูจากอะไรมากที่สุด (เลือกได้ 2 ข้อ)', 'priorities', ['ค่าเทอม', 'ทุนการศึกษา', 'ชื่อเสียงมหาวิทยาลัย', 'อาชีพหลังเรียนจบ', 'ผลงานของรุ่นพี่', 'การเดินทาง', 'ความชอบของตัวเอง', 'ผู้ปกครองสนับสนุน'], 2),
    createField('7. ตอนนี้อยู่ขั้นไหนของการเลือกคณะ', 'applicationStage', ['เพิ่งเริ่มหาข้อมูล', 'กำลังเปรียบเทียบหลายที่', 'ตั้งใจสมัครแล้ว', 'รอผลสอบที่อื่นก่อน']),
    createCheckField('8. เคยทำงานสร้างสรรค์อะไรมาบ้าง', 'creativeExperience', ['วาดรูป', 'ออกแบบ', 'ตัดต่อวิดีโอ', 'ทำเกม', 'จัดกิจกรรม', 'ถ่ายคอนเทนต์', 'ยังไม่เคยเลย']),
    createCheckField('9. อยากรับข่าวสารของคณะทางไหน', 'newsChannel', ['LINE', 'อีเมล', 'Facebook', 'Instagram', 'โทรศัพท์'])
  );
  form.append(makeElement('p', 'form-note', 'ทุกข้อเป็นตัวเลือก ข้อมูลที่กรอกจะอยู่ในหน้านี้เท่านั้น และจะไม่ถูกส่งออกจากเครื่อง'));
  const submit = makeButton('เปิดบัตรผ่านและดูผลลัพธ์', () => {}, 'button button-primary pass-submit');
  submit.type = 'submit';
  form.append(submit);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    state.passAnswers = Object.fromEntries(new FormData(form).entries());
    state.passAnswers.priorities = [...form.querySelectorAll('[name="priorities"]:checked')].map((input) => input.value);
    state.passAnswers.creativeExperience = [...form.querySelectorAll('[name="creativeExperience"]:checked')].map((input) => input.value);
    state.passAnswers.newsChannel = [...form.querySelectorAll('[name="newsChannel"]:checked')].map((input) => input.value);
    renderResult();
  });
  sceneContent.append(form);
  focusScene();
}

function getFinalBranches() {
  const ranked = rankedBranches();
  if (state.scores[ranked[0]] === state.scores[ranked[1]]) {
    const finalAnswer = state.answers['5.2'];
    return [finalAnswer.branch];
  }
  return state.scores[ranked[0]] - state.scores[ranked[1]] <= 1 ? ranked.slice(0, 2) : ranked.slice(0, 1);
}

function renderProfile(branch) {
  const profile = profiles[branch];
  const section = makeElement('section', 'result-profile');
  section.append(makeElement('h3', '', profile.title));
  section.append(makeElement('p', '', profile.summary));
  section.append(makeElement('h4', '', 'อาชีพที่เกี่ยวข้อง'));
  const occupations = makeElement('ul');
  const chosenJob = state.districtAnswers[branch];
  const jobs = chosenJob ? [chosenJob, ...profile.jobs.filter((job) => job !== chosenJob)] : profile.jobs;
  jobs.forEach((job) => occupations.append(makeElement('li', '', job)));
  section.append(occupations);
  section.append(makeElement('h4', '', 'เรียนได้ที่'));
  section.append(makeElement('p', '', `สาขา ${profile.school}`));
  return section;
}

function renderResult() {
  const winningBranches = getFinalBranches();
  updateProgress('ถึงคืนเทศกาลแล้ว');
  privacyNote.classList.add('hidden');
  sceneContent.replaceChildren(
    makeElement('p', 'chapter-label', 'ฉากจบ · เธอคือนักเดินทางแบบไหน'),
    makeElement('h2', 'result-heading', winningBranches.length === 2
      ? mixedTitles[[...winningBranches].sort().join('+')]
      : profiles[winningBranches[0]].title),
    makeElement('p', 'result-lead', winningBranches.length === 2
      ? 'บางคนเดินมาตลอดทางโดยเลือกสลับไปมาระหว่างสองแบบ นั่นไม่ใช่เรื่องแปลก ตอนจบจะเล่าถึงทั้งสองแบบ และโชว์อาชีพจากทั้งสองสาขาให้เลือกดู'
      : 'ตอนจบของเรื่องมี 5 แบบ ขึ้นอยู่กับทางที่เธอเลือกมาตลอดเส้นทาง แต่ละแบบจะบอกอาชีพที่ใกล้ตัวเธอ และสาขาที่เรียนเรื่องนั้นโดยตรงที่ School of Digital Media (SDM)')
  );
  winningBranches.forEach((branch) => sceneContent.append(renderProfile(branch)));

  const callout = makeElement('p', 'result-cta', 'ไม่ว่าเธอจะเป็นนักเดินทางแบบไหน เมืองนี้ยังมีที่ว่างรออยู่ สมัครสมาชิก เพื่อรับข่าวกิจกรรมของ SDM และข้อมูลทุนการศึกษาก่อนใคร');
  sceneContent.append(callout);
  sceneContent.append(makeButton('เริ่มการเดินทางอีกครั้ง', restartGame));
  focusScene();
}

function restartGame() {
  state.sceneIndex = 0;
  state.scores = Object.fromEntries(branches.map((branch) => [branch, 0]));
  state.answers = {};
  state.districtBranches = [];
  state.districtIndex = 0;
  state.districtAnswers = {};
  state.passAnswers = {};
  privacyNote.classList.add('hidden');
  gameScreen.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');
  window.scrollTo?.({ top: 0, behavior: 'smooth' });
}

document.getElementById('startGame').addEventListener('click', renderOpening);
