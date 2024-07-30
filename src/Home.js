import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Image1 from './paawalogo.png';
import Image2 from './paawalogo1.jpg';

function Home() {
    return (
        <>
        <div id='header-container'>
         <div id='empty-div'></div>
            <div id='logo-title'>
                <img id='paawa-logo' src={Image1}></img>
                <h1>Peravurani Area Agamudaiyar Welfare Association</h1>
            </div>
            <header id="header">
                    <NavLink to="/" className="grid-item" activeClassName="active" exact>Home</NavLink>
                    <NavLink to="/myinfo" className="grid-item" activeClassName="active">MyInfo</NavLink>
                    <NavLink to="/directory" className="grid-item" activeClassName="active">Directory</NavLink>
                </header>
            </div>
            <marquee><h1 style={{color:'red'}}>The meeting held on July 25th at the association office</h1></marquee>
            <h1>குருவிக்கரம்பை</h1>
            <p>
                பதினொன்று நாட்டு உறவின் முறையினர் பிற சமுதாயத்தினருக்கு
                எடுத்துக்காட்டாக வாழ்ந்தனர் என்பதற்கு அவர்களால் நமக்கு விட்டு
                செல்லப்பட்டிருக்கன்ற சமுதாய அமைப்பிலே உள்ள கரைகளும்,
                வாழ்வியல் சடங்குகளும், நடைமுறை பழக்க வழக்கங்களும், திருக்கோயில் சக்தி
                வழிபாட்டு நடைமுறைகளுமே இன்றளவும் சான்றாக விளங்கி வருகின்றன.
                அருள்மிகு முத்துமாரியம்மன் திருக்கோயில்
                இன்றைக்கு சற்றொப்ப 250ஆண்டுகளுக்கு முன்னர் குருவிக்கரம்பையில் வாழ்ந்த
                அகமுடையார் சமுதாயத்தைச் சேர்ந்த ஆறு குடும்பத்தினர்கள் தெய்வ வழிபாட்டிற்கும்
                இதன்மூலமாக ஒற்றுமையாகவும் பரஸ்பரமாகவும், கட்டுக்கோப்பாகவும்
                வாழ்ந்திடலுக்குமாகவும் நிர்மாணிக்கப்பட்டது தான் அன்னை அருள்மிகு
                முத்துமாரியம்மன் திருக்கோயில்.
                இந்த ஆறு குடும்பங்களைச் சார்ந்த குடும்பத்தலைவர்கள், தலைவர்கள் என்ற முறையில்
                வேலையின்பாற்பட்டு சுழற்சி முறையில் மேற்படி திருக்கோயிலின் அறங்காவலர்களாக
                இருந்துவந்து, திருக்கோயில் நிர்வாகம் சம்பந்தப்பட்ட அனைத்துப் பணிகளையும்
                நிர்வகித்து வந்துள்ளனர். இந்நிலை இன்றளவும் தொடர்கிறது.
                மேற்சொல்லப்பட்ட ஆறு குடும்பங்களைச் சேர்ந்தவர்களும், அவர்களினது
                வழித்தோன்றல்களும் முறையே தோண்டித்தேவர், தானத்தேவர், பள்ளித்தேவர்,
                நயினாங்குட்டித்தேவர், சேர்வைக்காரர், பெரமதேவர் ஆகிய ஆறு கரைகளுக்குள்
                அடங்குவர்.
                2004ஆம் ஆண்டில் ஆவிச்சித்தேவர் என்ற புதியதொரு ஏழாவது கரை
                உருவாக்கப்பட்டு அது முதற்கொண்டு குருவிக்கரம்பைக் கிராம ஏழு கரைதாரர்கள்
                என்றழைக்கப்படுகின்றனர்.
                அவ்வகையில் குருவிக்கரம்பைத் தாய்க் கிராமமும் அதன் பிடாகைக் கிராமங்களான
                வாத்தலைக்காடு, மருங்கப்பள்ளம், நாடாகாடு, கள்ளங்காடு, குண்டாமரைக்காடு,
                பாலச்சேரிக்காடு, கோட்டைக்காடு, முனுமாக்காடு, விளக்கு வெட்டிக்காடு,
                கொல்லங்கரம்பை, ஓமக்காடு, கரம்பக்காடு, தேனாங்காடு, பூங்குடிக்காடு,
                சாந்தாம்பேட்டை, கஞ்சங்காடு, வாவிளான்வயல் ஆகிய பதினெட்டிலும் உள்ள
                அகமுடையார் சமுதாயத்தின் வழிபாட்டுக்காக (சற்றொப்ப 250 ஆண்டுகளுக்கு
                முன்னர்) அருள்மிகு முத்துமாரியம்மன் திருக்கோயில் நிர்மாணிக்கப் பெற்றது.
                இவர்களால் ஆண்டுதோறும் சித்திரைப் புத்தாண்டு பாலாபிஷேக பூச்சொரிதல்
                மற்றும் நித்திய, வார, மாத, வருட ஏறுபடி விழாக்கள் அருள்மிகு முத்துமாரியம்மன்
                திருக்கோயிலில் நடத்தப்பட்டு வரப்படுகிறது. ஒவ்வொரு தமிழாண்டு பங்குனி
                மாதம் மூன்றாவது வார திங்கட்கிழமையில் அருள்மிகு அரசடி செல்வ விநாயகர்
                கோயிலில் நண்பகல் வழிபாட்டுடன், அன்றுமாலை அருள்மிகு அய்யனார், மெய்யப்ப
                சுவாமி, செல்லப்ப சுவாமி ஆகிய பரிவார மூர்த்திகளுக்கு, கரைதாரர்கள் மற்றும்
                பொதுமக்கள் பொங்கலிட்டு வழிபாடுகள் செய்வதும், மேற்படி பொங்கல் நாளில்
                பிறந்த வீட்டிலிருந்து புகுந்த வீட்டு உறவின்முறைக் கிராமங்களில் வாழ்க்கைப்பட்டுள்ள
                பெண்களும் அதே பொங்கல் நாளில் திருக்கோயிலுக்கு வருகைதந்து பொங்கலிட்டு
                படையல் வழிபாட்டு நிகழ்வுகளில் கலந்து கொள்வதென்பது வழிபாட்டோடு
                நண்பர்களையும் உறவினர்களையும் சந்தித்துக் கொள்வதன் மூலம் இது ஒரு காμம்
                பொங்கலாகவும் அமைகின்றது. பொங்கல் வழிபாடுகள் நிறைவு பெறுகின்ற நேரத்தில்
                (இரவு 9.30மணியளவில்) கரம்பக்குடியில் இருந்து 25க்கும் மேற்பட்ட முகம்மதிய
                சமுதாயத்தைச் சேர்ந்தவர்கள் மலர் மாலைகளுடன் திருக்கோயிலுக்கு வருகை தந்து
                வழிபாடு செய்வதும், கோயில் மரியாதைகளைப் பெற்றுச் செல்வதும் தொடர்ந்து
                வருகின்ற நடைமுறையாகும். அருள்மிகு மெய்யப்பசுவாமி திருக்கோயிலில் சுதை
                வடிவில் ராவுத்தர் சுவாமி எழுந்தருளியிருப்பது இங்கு நினைவு கூறத்தக்கது என்பதுடன்
                மத நல்லிணக்கத்திற்கு எடுத்துக்காட்டாகவும் இது அமைகின்றது.
                குருவிக்கரம்பையும் அதன் பிடாகைக் கிராமங்கள் பதினேழும் இன்று குருவிக்கரம்பைகரம்
                பக்காடு- வாத்தலைக்காடு- மருங்கப்பள்ளம்-கெங்காதரபுரம் ஆகிய ஊராட்சிகளில்
                அடங்கும்.
                அருள்மிகு முத்துமாரியம்மன் திருக்கோயில் குருவிக்கரம்பையும் அதனைச் சேர்ந்த பிடாகைக்
                கிராமங்கள் பதினேழிலும் வாழ்ந்து வருகின்ற அகமுடையார் சமுதாயத்திற்கு மட்டுமே நிர்வாக
                பரிபாலனத் திட்டம் செய்து கொள்வதற்கு உரிமையுடையது என தஞ்சாவூர் இந்து சமய
                அறநிலைய ஆட்சித்துறை இணை ஆணையர் நீதிமன்றம் மூலமாக 24.3.2009இல் தீர்ப்புரை
                பெறப்பட்டுள்ளது. (திருவள்ளுவராண்டு பங்குனித் திங்கள் 11ஆம் நாள்) இவ்விவரம்
                தஞ்சாவூர் மாவட்ட அரசிதழ் சிறப்பு வெளியீடு ஆணையின்படி வெளியிடப்பட்டுள்ளது.
                மருங்கப்பள்ளத்தில் அமைந்ததுள்ள மிகவும் பழமை வாய்ந்த சிவன் கோயில் ஒளசதபுரிஸ்வரர்
                உலகப் பிரசித்திப்பெற்றது. இக்கோயிலை அடிப்படையாக வைத்துதான் ‘புதையல்’ திரைப்படம்
                உருவான குறிப்பிடத்தக்கது.</p>
            <h1>ஆவணம்</h1>
            <p>செஞ்சொற் புலமையும் செந்நெற் கழனியும் கொஞ்சி உறவோங்கும் தஞ்சைத் தரணியின் பாட்டுக்கோட்டையாம் பட்டுக்கோட்டையின் பகுதியின் அமைந்த தகுதியின் மிகுந்தது ஆவணம் தலைநகர். அகமுடையார்க்கெல்லாம் தாயினும் மேலதாய் தாங்கி வளர்ப்பது சேயினை ஒத்தநல்ல சேவையின் மிக்கது மேவு சுயம் பிரகாச விளக்கது. கரிகாற்சோழனின் கல்லணைக்கால்வாய் பெரிதும் ஆவணம் பெருமக்குக் காரணம் மேல்புறம் வீடுகள் கீழ்ப்புறம் வயல்கள் தென்வடலாகச் செல்வது ஆறு. ஆவணம் பதினொன்று நாட்டின் தலைமை நாடு, திருவருள் நலஞ் சிறந்த எல்லா வளமும் தன்னகத்தே இயல்பாகவே வாய்க்கப்பெற்று அமைந்தது இவ்வூர். முழு ஆளுமை என்று சொல்லப்படுகின்ற உடல்-உள்ளம்-ஆன்மா என்னும் மூன்றும் ஒருசேர அதாவது ஒருமித்த வெற்றியைப் பெற்றுக்கொண்டிருக்கும் முதன்மை நாடாக விளங்குவது ஆவணம். “எண்ணும் எழுத்தும் கண் எனத் தகும்” என்ற விழிப்புணர்வோடு நெற்றிக்குத் திலகமாகவும்-முகத்துக்கு விழியாகவும் உடலுக்குச் சிரசாகவும் விளங்குவது போலவே தலைமைநாடு என்ற பொறுப்புக்கு முழுப்பொருத்தமாக விளங்கிவருவது ஆவணம் என்பதை அன்போடும், பாசத்தோடும், உறவோடும், உணர்வோடும் முதற்கண் கூறிக்கொள்வதில் மகிழ்ச்சி அடைகின்றோம். எந்த ஒரு செயலைச் செய்கின்ற போதும் அதனை ஒருமித்த உணர்வோடும் முழுச் சிரத்தையோடும் செய்வதே, ஆவணம் எங்கும் எதிலும் வெற்றி பெறுவதற்கான ஆதாரமான சிந்தனையாகும்.
            </p>
            <h1>நெடுவாசல்</h1>
            <p>நெடுவாயில் நிறைவயல் சூழ் நெய்தல்வாயில்” என்று திருநாவுக்கரசரால் ‘திருத்தாண்டகம்’ என்னும் நூலில் பாடப்பெற்ற பழம்பெருமை வாய்ந்த நெடுவாசல் கிராமம், நமது உறவின்முறை கிராம வரிசையில் இரண்டாமிடத்தில் இடம் பெற்றிருக்கிறது. சுமார் பதினைந்து வருடங்களுக்கு முன்பு வரை, மிகவும் பின்தங்கிய வறண்ட பகுதியாக அறியப்பட்டிருந்த நெடுவாசல் கிராமம். இன்று, ஊரெங்கிலும் பசுமை ததும்பி, பெரும்பாலான நவீன வீடுகளுடனும் கட்டிடங்களுடனும் செல்வச் செழிப்பான கிராமமாகியிருக்கும் நெடுவாசலின் ‘விறுவிறு’ முன்னேற்றத்திற்கு முழுமுதற் காரணமாகக் கருதப்படுவ, கிராம மக்களின் ஒற்றுமையும் கட்டுக்கோப்பும் தான்! கல்வியிலும், வளர்ச்சியிலும் இளம் தலைமுறையினர் முந்திச் செல்ல ஊன்றுகோலாகவும் உந்து சக்தியாகவும் திகழ்வது கிராமப் பெரியோர்களின் கடந்த காலங்களில் ஈடுபாட்டோடு முன்னெடுத்த வளர்ச்சி சார்ந்த நடவடிக்கைகள் தான்! மன்னராட்சி காலத்தில் நெடுவாசல் கிராமத்தை மையமாக வைத்து வரிவசூல் மற்றும் நிர்வாகம் நடைபெற்று வந்திருக்கிறது. இன்றளவும் ‘அரண்மனைத் தோப்பு’ என்றழைக்கப்படும் கிராமத்தின் மேற்குப் பகுதியில், அரண்மனையின் அடினைச் சுவர்ப்பகுதி காணத்தக்கதாக உள்ளது. பிரிட்டிஷ் இந்தியாவில் உள்ளாட்சி அமைப்புகள் ஏற்படுத்தப்பட்ட காலத்திலேயே, நெடுவாசல் கிராமப் பஞ்சாயத்து அமைப்பு ஏற்படுத்தப்பட்டிருந்தது. தற்பொழுது ஊராட்சி மன்ற அலுவலகம் அமைந்துள்ள இடத்தில் இருந்த புளியமரத்தின் அடியில்தான் அப்போது ஊர்க் கூட்டங்கள் நடைபெற்றுள்ளன. இந்த இடத்திற்கு ‘அம்பலப் புளியடி’ என்னும் பெயர் இன்றுவரை நிலைத்துள்ளது. இங்கு தேவர் சமுதாயத்தினர், ஏழு கரைகளாகப் பிரிக்கப்பட்டுள்ளனர். நமது அமைப்பிற்கான கிராமத் தலைவரும், உறவின் முறைத் தொடர்பாளரும் கரை வரிசைப்படி தேர்வு செய்யப்படுகின்றனர். தேவையான தருணங்களில் ஊர்க்கூட்டம் கூட்டப்பட்டு, பொதுவான விஷயங்கள் விவாதிக்கப்பட்டு ஒருமித்த முடிவு எட்டப்படுகிறது. (நெடுவாசல் கிராம ஊர்க்கூட்டங்களின் பெருமிதம் நமது உறவின் முறைக் கிராமங்கள் அனைத்திலும் பிரசித்தமாக பேசப்படுவது!) சித்திரை முதல் நாளில் கிராமம் கூடி பஞ்சாங்கம் படித்தல், நல்லேர் பூட்டுவதற்கு நாள் குறித்தல், அந்த ஆண்டில் திருவிழா கொண்டாடலாமா என முடிவெடுத்தல், கிராம வரவு-செலவு கணக்காய்தல் மற்றும் புதிய நிர்வாகிகளைத் தேர்வு செய்தல் போன்ற காரியங்களைச் செய்கிறது. எந்தவொரு தனிமனிதரும் எவ்வளவு செல்வாக்கு, புகழ் உடையவராயினும், கிராமத்துக்குக் கட்டுப்பட்டவரே! யாரைவிடவும் கிராமமும், அதன் நலனுமே பெரிது என்பது நெடுவாசலின் பாரம்பரியக் கொள்கையாக உள்ளது. இன்றளவிலும், கோவில் மற்றும் ஏனைய விழாக்களில் கிராமம் அழைத்தலும், கரை அழைத்தலும், நாடு, நகரம் என மற்ற சிறப்புக்குரியவர்களை அழைத்து மரியாதை செய்வதும், மரபு மாறாமல் கண்டிப்புடன் பின்பற்றப்படுகிறது. கிராமத்தின் மையப்பகுதியில் நாடியம்மன் கோயிலும், அதனருகிலேயே பாலகண்ட ஈஸ்வரர் உடனுறை மங்களநாயகி சிவாலயமும், சித்தி விநாயகர், உந்திவிநாயகர் கோயில்களும் குஞ்சியம்மாள், குஞ்சுபாட்டி கோயில்களும், ஊருக்குள் அமைந்துள்ள முக்கிய திருக்கோவில்களாகும். ஊரின் மேற்கில் பெருமாள் கோயிலும், வடக்கு எல்லையில் பத்ரகாளியம்மன் கோவிலும், கிழக்கு எல்லையில் அய்யனார் மற்றும் ஏழு கரைக்காரர்களுக்கான கோவில்களும், தெற்கு எல்லையில் இத்தியப்பச்சி கோவிலும் என ஒரு புண்ணிய நகரத்துக்கான வடிவமைப்போடு திகழ்கிறது நெடுவாசல். மிகவும் அரிதாகவும், பிரம்மாண்டமாகவும் நடத்தப்படும் ஸ்ரீநாடியம்மன் கோயில் திருவிழா மிகவும் பிரசித்தமானது. இந்த திருவிழா கிராமத்திலுள்ள அனைத்து வகுப்பினரையும் ஒன்றிணைக்கும் வண்ணம் அமைக்கப்பட்டிருக்கிறது. இந்தத் திருவிழாவின் எட்டாம் நாளில் பவனிவரும் 65அடி உயர ‘குருத்தோலைச் சப்பரம்’ தனித்துவம் வாய்ந்தது. நெடுவாசல் அரசு உயர்நிலைப் பள்ளி, நமது உறவின்முறைக் கிராமங்களைச் சார்ந்த பல முக்கியஸ்தர்களுக்கு கல்வி கற்பித்த பெருமை வாய்ந்தது. கிராம முன்னேற்றத்திற்கும், ஒற்றுமைக்கும் தொடக்கப் புள்ளியாக, இந்தப் பள்ளியைச் சொன்னால் அது மிகையல்ல. நாற்பது ஆண்டுகளுக்கும் மேலாக பொங்கல் விழாக்களை சிறப்புற நடத்திவரும் இளைஞர் மன்றம், அரசு மற்றும் தனியார் ஊழியர்கள் சங்கம், வர்த்கர் சங்கம் மற்றும் ஆன்மீக வழிகாட்டும் ஐயப்ப சேவா சங்கம், பழனி பாத யாத்திரைக் குழு, ஆதிபராசக்தி வழிபாட்டு மன்றம், சன்மார்க்க சங்கம் என சிறப்பான செயல்பாடுகளை முன்னெடுக்கும் கூட்டமைப்புகள் இங்கு செயல்படுகின்றன. எதிலும் பிரிந்து இயங்குவதை விட, எவ்வகையிலேனும் சேர்ந்து இயங்குவது என்பது குடும்ப வாழ்விற்கு மட்டுமின்றி, கிராம வாழ்க்கைக்கும் பிரதானமானது என்பது நெடுவாசல் கிராமத்தார்கள் உணர்ந்து பின்பற்றும் நிதர்சனம்! தனிமனிதப் பெருமைகளைக் காட்டிலும், கிராம உயர்வுக்கும் பெருமைக்குமே ஒவ்வொருவரும் முக்கியத்துவம் தருகிறார்கள் என்பதே நெடுவாசல் கிராமத்தின் கூர்முனைச் சிறப்பாகும்!</p>
        </>
    );
}

export default Home;
