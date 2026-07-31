const people = [
{
    id: 1,
    name: "Shehbaz Sharif",
    role: "Prime Minister of Pakistan",
    institution: "Executive",
    tenure: "2022 – 2023, 2024 – present (also former Punjab Chief Minister)",
    status: "active",
    photo: "images/shehbaz-sharif.jpg",
    summary: "Sharif's record spans two decades of corruption, human-rights, and legitimacy allegations — most contested, several since cleared by courts, one still unresolved after more than a decade. He and his sons were accused of laundering over $200 million; courts and NAB acquitted them in 2022–2023, finding no direct evidence. A pattern recurs across his Punjab-era cases — Ashiana Housing, Ramzan Sugar Mills, and Saaf Pani — where family members and aides were formally accused, some fled or were declared proclaimed offenders, and all were later acquitted for lack of evidence. His most serious unresolved case is the 2014 Model Town massacre, where a judicial inquiry held his Punjab government \"directly responsible\" for 14 deaths and a sessions court ordered murder charges that were never resolved. Separately, official Auditor General reports flagged billions of rupees in financial irregularities on Punjab-era infrastructure projects — audit findings, not criminal convictions, but part of the public record. His second government has drawn international criticism over a press and opposition crackdown, and his 2024 return to power was widely disputed as military-engineered.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 1,
        courtCases: 7,
        convictions: 0,
        acquittals: 5,
        auditFindings: 1,
        ongoing: 4,
        reportsMentioning: 9
    },
    record: [
        { year: "1993", text: "Accused by Gen. Asif Nawaz Janjua's widow of involvement in a plot to eliminate her husband — never substantiated in court.", tag: "UNSUBSTANTIATED", cls: "status-pending" },
        { year: "1999", text: "Charged in the Sabzarar case over a staged police encounter that killed a Lahore resident's sons; acquitted, though the victims' mother's appeal against that acquittal remains active.", tag: "ACQUITTED — APPEALED", cls: "status-acquitted" },
        { year: "2014", text: "Model Town massacre: 14 killed, including two pregnant women, during a police operation under his Punjab government. A judicial inquiry held his government \"directly responsible\"; a sessions court ordered murder charges. Still unresolved.", tag: "UNRESOLVED", cls: "status-investigation", highlight: true },
        { year: "2018–23", text: "Ashiana-e-Iqbal Housing Scheme reference: NAB accused him of unlawfully transferring the project between authorities, cancelling an awarded contract, and causing an estimated Rs193 million loss to the exchequer. Arrested October 2018; acquitted November 2023 after NAB itself found no misuse of authority.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2018–22", text: "Punjab Saaf Pani Company reference: NAB alleged corruption in a water-filtration contract awarded at inflated rates. His daughter Rabia Imran and son-in-law Ali Imran Yousaf were declared proclaimed offenders with their assets attached after leaving the country; both later returned and were declared innocent by anti-corruption investigators in 2026, after the main accountability case had already ended in acquittal in 2022.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2018–25", text: "Ramzan Sugar Mills reference: NAB alleged public funds were used to build a drain and bridge benefiting the family's sugar mill. Shehbaz and his son Hamza were acquitted in February 2025 after NAB found no evidence of corruption.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2016–17", text: "The Auditor General of Pakistan's special audit of the Orange Line Metro Train project — built under his Punjab government — identified overpayments, non-standard payments without approval, missing supporting invoices, and inter-government loan agreements withheld from auditors citing confidentiality. An audit finding, not a criminal charge.", tag: "AUDIT FINDING", cls: "status-investigation" },
        { year: "2020–23", text: "Accused of laundering over $200 million through 28 proxy accounts. Courts and NAB cleared him in 2022–2023, finding no direct evidence.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2022", text: "His son Hamza's election as Punjab Chief Minister was ruled unlawful by the Supreme Court, which found the deputy speaker had illegally rejected opposing votes; Hamza's cabinet appointments and orders were declared null and void.", tag: "COURT RULING", cls: "status-investigation" },
        { year: "2022", text: "Islamabad High Court issued notices to Sharif — among a chain of \"chief executives\" — over an undeclared tacit approval of enforced disappearances.", tag: "COURT NOTICE", cls: "status-investigation" },
        { year: "2023", text: "Following Imran Khan's arrest, Human Rights Watch documented 10,000+ arrests and the use of live ammunition against protesters, plus 100+ civilians tried in military courts — under his first government.", tag: "DOCUMENTED", cls: "status-pending" },
        { year: "2024", text: "A senior PML-N official, Javed Latif, publicly called the coalition that returned Sharif to power a \"puppet government\" installed by the military establishment.", tag: "ON THE RECORD", cls: "status-pending" }
    ],
    promises: [
        { text: "Pledged on taking office in 2022 to fix Pakistan's economic crisis, warning of the \"largest budget deficit in its history.\"", date: "2022", status: "in-progress" },
        { text: "2024 \"Uraan Pakistan\" economic plan — criticized by economists as vague and poorly grounded in Pakistan's actual economic and political landscape.", date: "2024", status: "in-progress" }
    ],
    sources: [
        { name: "OCCRP — money laundering acquittal", link: "https://www.occrp.org/en/news/pakistani-pm-and-son-acquitted-from-money-laundering-case" },
        { name: "The Express Tribune — FIA clean chit, 28 benami accounts", link: "https://tribune.com.pk/story/2380726/shehbaz-hamza-get-clean-chit-by-fia-in-money-laundering-case" },
        { name: "The Express Tribune — Sabzarar case acquittal challenged", link: "https://tribune.com.pk/story/359257/sabzarar-encounter-chief-ministers-acquittal-challenged" },
        { name: "The Express Tribune — 1993 assassination allegation", link: "https://tribune.com.pk/story/81551/sharif-could-be-involved-in-gen-asifs-death" },
        { name: "Forbes — Panama Papers / London properties", link: "https://www.forbes.com/sites/bisnow/2017/08/01/the-london-property-deal-that-brought-down-pakistans-prime-minister/" },
        { name: "Global Village Space — Model Town massacre inquiry", link: "https://www.globalvillagespace.com/the-massacre-in-model-town-terrorism-by-the-house-of-sharifs/" },
        { name: "Dawn — IHC enforced disappearances notice", link: "https://www.dawn.com/news/1692229" },
        { name: "Human Rights Watch — World Report 2025, Pakistan", link: "https://www.hrw.org/world-report/2025/country-chapters/pakistan" },
        { name: "Human Rights Watch — mass arrests after May 9", link: "https://www.hrw.org/news/2023/05/20/pakistan-mass-arrests-target-political-opposition" },
        { name: "The Wire — PECA amendments protest coverage", link: "https://m.thewire.in/article/south-asia/pakistan-journalists-protesting-peca/amp" },
        { name: "The Diplomat — dynastic politics analysis", link: "https://thediplomat.com/2022/04/shehbaz-sharif-has-too-many-fires-to-put-out/" },
        { name: "DT Next — Javed Latif \"puppet government\" quote", link: "https://www.pressreader.com/india/dt-next/20240314/282119231516605" },
        { name: "The News — Ashiana Housing acquittal (Nov 2023)", link: "https://www.thenews.com.pk/latest/1130237-court-acquits-shehbaz-sharif-others-in-ashiana-housing-scam" },
        { name: "The News — Ramzan Sugar Mills acquittal (Feb 2025)", link: "https://www.thenews.com.pk/latest/1280029-court-acquits-pm-shehbaz-hamza-in-sugar-mills-case" },
        { name: "Dawn — Saaf Pani daughter/son-in-law acquitted (2026)", link: "https://www.dawn.com/news/1998283" },
        { name: "Dawn — Saaf Pani detailed verdict, proclaimed offenders", link: "https://www.dawn.com/news/1674799" },
        { name: "Auditor General of Pakistan — Orange Line Metro special audit (primary source PDF)", link: "https://agp.gov.pk/SiteImage/Policy/Orange-Line-Metro-2016-2017.pdf" },
        { name: "Dawn — Orange Line audit report to Punjab governor", link: "https://www.dawn.com/news/1430877" },
        { name: "The News (via Xinhua/SC ruling) — Hamza Shehbaz Punjab CM election overturned", link: "https://www.thenews.com.pk/latest/976972-punjab-cm-poll-sc-resumes-hearing-against-punjab-deputy-speakers-ruling" }
    ],
    cases: []
},
{
    id: 2,
    name: "Asim Munir",
    role: "Chief of Army Staff / Chief of Defence Forces",
    institution: "Military",
    tenure: "2022 – present (Field Marshal; also Chief of Defence Forces since Nov 2025)",
    status: "active",
    photo: "images/asim-munir.jpg",
    summary: "Munir has faced no personal criminal conviction or court finding of wrongdoing — but his tenure has been marked by an unusual concentration of power and a documented pattern of human-rights abuses by forces under his command. In November 2025, parliament granted him command of all three armed services, control over nuclear command appointments, and lifelong legal immunity, in an amendment critics including India's UN representative called a \"constitutional coup.\" Parliament had already extended his own tenure from three to five years in 2024 with minimal debate. Independent monitors — not just Imran Khan's camp — have documented enforced disappearances and extrajudicial killings in Balochistan intensifying under his command, with a Baloch rights activist, Mahrang Baloch, sentenced to life imprisonment in June 2026 after a trial Amnesty International called a sham. A 2025 investigative report alleging nepotism in his family's appointments was followed by an alleged raid and torture of the journalist's brothers. Imran Khan has made a series of serious personal allegations against Munir from prison, none of which have been tested in court.",
    hisaabScore: {
        officesHeld: 4,
        investigations: 0,
        courtCases: 0,
        convictions: 0,
        acquittals: 0,
        documentedPatterns: 6,
        unverifiedAllegations: 5,
        reportsMentioning: 8
    },
    scoreNote: "Munir has no NAB/FIA cases or court proceedings against him personally — a fact critics attribute to structural immunity rather than a clean record. This profile tracks documented patterns by forces under his command and allegations made by named parties, clearly separated from unproven claims.",
    record: [
        { year: "2017", text: "As Director-General of Military Intelligence, critics alleged the agency played an active role in monitoring political activity ahead of Pakistan's 2018 general election. No court has found him personally responsible; the military has consistently denied election interference.", tag: "ALLEGED — DENIED", cls: "status-pending" },
        { year: "2018–19", text: "Appointed DG ISI in October 2018; removed after eight months in June 2019. A long-circulated claim says he was removed for presenting evidence of alleged corruption by Imran Khan's wife, Bushra Bibi. Khan publicly denied this account in February 2023, saying Munir never showed him such proof. Khan later made different allegations in 2025 concerning Munir's attempts to contact Bibi through an intermediary.", tag: "DISPUTED", cls: "status-pending" },
        { year: "2020–22", text: "A 2020 book alleged Munir was behind the removal of a High Court judge critical of the ISI. The judge himself, Shaukat Aziz Siddiqui, publicly rejected this in November 2022, stating his removal predated Munir's ISI appointment and naming a different officer as responsible. The Supreme Court later ruled Siddiqui's own removal unlawful (2024), though on due-process grounds unrelated to Munir.", tag: "REBUTTED BY SUBJECT", cls: "status-acquitted" },
        { year: "2022", text: "Appointed Chief of Army Staff in November 2022 by PM Shehbaz Sharif, during intense polarization with former PM Imran Khan.", tag: "APPOINTMENT", cls: "status-pending" },
        { year: "2023", text: "Following Imran Khan's arrest on 9 May 2023, authorities responded to attacks on military installations with over 10,000 arrests and military trials for civilians. Human rights organizations criticized due-process standards; the military defended the measures as necessary after attacks on its facilities.", tag: "DOCUMENTED", cls: "status-investigation" },
        { year: "2024", text: " Protests over subsidies/electricity in Azad Kashmir turned violent; at least 5 killed in clashes with Punjab Rangers, Frontier Constabulary, and AJK Police. Government later accepted protesters' economic demands.", tag: "DOCUMENTED — DEATHS IN CLASHES", cls: "status-investigation", highlight: true },
        { year: "2024", text: "Parliament amended the Army Act to extend the tenure of service chiefs from three to five years, passed with minimal debate in a session where opposition lawmakers tore up copies of the bill. Ensures Munir remains Army Chief until at least November 2027.", tag: "ENACTED", cls: "status-investigation" },
        { year: "2025", text: "An investigative report by journalist Ahmad Noorani alleged Munir's relatives were placed in senior state and corporate positions — including the Interior Ministry and Pakistan Cricket Board — without merit-based process. Noorani says his brothers were subsequently raided and tortured in Pakistan in apparent retaliation; press-freedom groups condemned the incident.", tag: "ALLEGED / RETALIATION REPORTED", cls: "status-investigation", highlight: true },
        { year: "2025", text: "Human Rights Council of Balochistan documented 144 enforced disappearances and 46 killings in a single month (February 2025) alone, part of a broader pattern of abductions and killings reported by multiple independent monitors during his command.", tag: "DOCUMENTED PATTERN", cls: "status-investigation" },
        { year: "2025–26", text: "Baloch rights activist Mahrang Baloch was arrested in March 2025 following a protest crackdown, then sentenced to life imprisonment in June 2026 by an anti-terrorism court for a paramilitary soldier's death during a 2024 protest. She boycotted the trial; Amnesty International called the proceedings a sham. She had been nominated for the 2025 Nobel Peace Prize.", tag: "LIFE SENTENCE", cls: "status-investigation" },
        { year: "2025", text: "Delivered a speech reviving \"two-nation theory\" rhetoric, describing Hindus and Muslims as fundamentally different in religion, customs, and ambitions — drawing criticism as divisive rhetoric from a serving military chief.", tag: "CRITICIZED", cls: "status-pending" },
        { year: "2025", text: "Imran Khan has alleged from prison that Munir orchestrated a \"London Plan\" with Nawaz Sharif to sideline PTI, interfered in the 2024 election, and bears responsibility for the treatment of Khan and Bushra Bibi in custody. These are unproven allegations by a political opponent, denied by authorities.", tag: "UNPROVEN ALLEGATION", cls: "status-pending" },
        { year: "2025", text: "IMF's own November 2025 report on Pakistan stated corruption had become embedded in governance \"including the offices of Prime Minister Shehbaz Sharif and Army Chief Asim Munir,\" identifying elite capture as especially damaging.", tag: "IMF FINDING", cls: "status-investigation" },
        { year: "2025", text: "Parliament passed the 27th Constitutional Amendment, creating the Chief of Defence Forces post giving Munir command of all three armed services, authority over nuclear command appointments, and lifelong legal immunity from prosecution. Critics, including India's UN representative, called it a \"constitutional coup.\"", tag: "MAJOR POWER GRANT", cls: "status-investigation", highlight: true },
        { year: "2025", text: " Region-wide JKJAAC strike in Azad Kashmir escalated into clashes with security forces; 10 killed, 100+ injured. Government said it accepted most demands; protest leaders disputed that and continued mobilizing.", tag: "DOCUMENTED — DEATHS IN CLASHES", cls: "status-investigation", highlight: true },
        { year: "2025", text: "Imran Khan publicly accused Munir of a pattern of \"mass killing of unarmed and ordinary civilians,\" citing May 9 2023, Nov 26 2024, Azad Kashmir, and Muridke as a chain of events. This is a political opponent's characterization, not a court finding.", tag: "UNPROVEN ALLEGATION", cls: "status-pending" },
        { year: "2026", text: "Protests over refugee-seat representation and political reform spread across Muzaffarabad, Rawalakot, Mirpur and Kotli; a communications blackout was imposed. In clashes through June–July, JKJAAC reported roughly 14 deaths across multiple incidents (5 in a march near Rawalakot, 9 in Poonch-area clashes on July 14). Authorities said some protesters attacked security personnel; organizers said force used against largely peaceful demonstrators was excessive. A JKJAAC leader called the Rawalakot events a \"massacre.\"", tag: "DOCUMENTED — DEATHS IN CLASHES", cls: "status-investigation", highlight: true },
    ],
    promises: [
        { text: "Unlike elected officials, Munir has not campaigned on a public manifesto. Public speeches have emphasized defeating terrorism, economic stability, and national unity — goals rather than measurable pledges.", date: "2022–2026", status: "in-progress" },
    ],
    sources: [
        { name: "Wikipedia — Asim Munir (consolidated timeline, Siddiqui clarification, Fact Focus report)", link: "https://en.wikipedia.org/wiki/Asim_Munir" },
        { name: "The News — Justice Shaukat Siddiqui clarifies Munir wasn't behind his sacking", link: "https://www.thenews.com.pk/print/1014267-justice-shaukat-siddiqui-clarifies-lt-gen-asim-munir-wasn-t-behind-his-sacking" },
        { name: "Reuters (via US News) — Army Act amendment extends tenure to 5 years", link: "https://www.usnews.com/news/world/articles/2024-11-04/pakistan-parliament-approves-bill-to-extend-army-chiefs-service-tenure" },
        { name: "VOA — Parliament extends army chief's term amid opposition outcry", link: "https://www.voanews.com/a/pakistan-parliament-extends-army-chief-term-amid-opposition-outcry/7851242.html" },
        { name: "The Diplomat — Mahrang Baloch's conviction (June 2026)", link: "https://thediplomat.com/2026/07/mahrang-balochs-conviction-is-a-pyrrhic-victory-for-the-pakistani-state/" },
        { name: "Daily Star — Baloch activist sentenced to life", link: "https://www.thedailystar.net/news/world/news/pak-rights-activist-sentenced-life-prison-4207581" },
        { name: "Geo News — ATC sentences Mahrang Baloch and Sibghatullah to life imprisonment", link: "https://www.geo.tv/latest/669914-atc-sentences-bycs-dr-mahrang-baloch-fellow-activist-to-life-imprisonment" },
        { name: "Human Rights Council of Balochistan — official site and reports", link: "https://hrcbalochistan.com/" },
        { name: "Fact Focus — nepotism investigation (Noorani, March 2025)", link: "https://factfocus.com/humanrights/4326/" },
        { name: "RSF — brothers forcibly disappeared in reprisal for Munir reporting", link: "https://rsf.org/en/pakistan-rsf-demands-immediate-release-journalist-ahmad-noorani-s-brothers-forcibly-disappeared" }
    ],
    cases: []
},
{
    id: 3,
    name: "Maryam Nawaz",
    role: "Chief Minister of Punjab",
    institution: "Pakistan Muslim League (N)",
    tenure: "2024–present",
    status: "active",
    photo: "images/maryam-nawaz.jpg",
    summary: "Maryam Nawaz has been one of Pakistan's most influential and controversial politicians. Her public record includes high-profile corruption cases, later legal relief through appeals, governance initiatives in Punjab, and ongoing criticism from political opponents over advertising, spending priorities, and campaign promises.",
    hisaabScore: {
        officesHeld: 3,
        courtCases: 4,
        convictions: 1,
        convictionsOverturned: 1,
        investigations: 5,
        documentedCriticism: 8,
        campaignPromises: 15,
        reportsMentioning: 11
    },
    record: [
        {
            year: "2016",
            text: "Named in the Panama Papers, triggering investigations into the Sharif family's offshore assets.",
            tag: "INVESTIGATION",
            cls: "status-investigation"
        },
        {
            year: "2017",
            text: "Supreme Court disqualified Nawaz Sharif from office following the Panama case.",
            tag: "SUPREME COURT",
            cls: "status-investigation"
        },
        {
            year: "2018",
            text: "Convicted in the Avenfield Apartments reference by an accountability court.",
            tag: "CONVICTED",
            cls: "status-convicted"
        },
        {
            year: "2022",
            text: "Higher courts later suspended and overturned major convictions, allowing her return to politics.",
            tag: "CONVICTIONS OVERTURNED",
            cls: "status-acquitted"
        },
        {
            year: "2024",
            text: "Became the first female Chief Minister of Punjab.",
            tag: "HISTORIC",
            cls: "status-completed"
        },
        {
            year: "2024",
            text: "Launched projects including Maryam Ki Dastak, Apni Chhat Apna Ghar, and the Punjab Laptop Scheme revival.",
            tag: "GOVERNMENT PROGRAM",
            cls: "status-completed"
        },
        {
            year: "2024–26",
            text: "Opposition criticized extensive government advertising, publicity campaigns, and 'photo-op politics'. The Punjab government says public awareness campaigns are necessary to inform citizens about services.",
            tag: "CRITICISM",
            cls: "status-pending"
        },
        {
            year: "2024–26",
            text: "Critics argued inflation, unemployment, healthcare, education, and environmental issues remain insufficiently addressed despite new initiatives. The government says reforms are ongoing and require time.",
            tag: "PERFORMANCE DEBATE",
            cls: "status-pending"
        }
    ],
    promises: [
        {
            text: "Transform Punjab into an economic hub.",
            status: "ongoing"
        },
        {
            text: "Improve public healthcare.",
            status: "ongoing"
        },
        {
            text: "Increase employment opportunities.",
            status: "ongoing"
        },
        {
            text: "Women's safety reforms.",
            status: "ongoing"
        },
        {
            text: "Suthra Punjab campaign.",
            status: "in-progress"
        }
    ],
    sources: [
        { name: "Supreme Court of Pakistan — Panama Papers & related judgments", link: "https://www.supremecourt.gov.pk/" },
        { name: "National Accountability Bureau (NAB)", link: "https://nab.gov.pk/" },
        { name: "Election Commission of Pakistan (ECP)", link: "https://www.ecp.gov.pk/" },
        { name: "Government of Punjab", link: "https://punjab.gov.pk/" },
        { name: "Punjab Chief Minister Office", link: "https://cm.punjab.gov.pk/" },
        { name: "Reuters — Pakistan news archive", link: "https://www.reuters.com/world/asia-pacific/" },
        { name: "Dawn News", link: "https://www.dawn.com/" },
        { name: "Geo News", link: "https://www.geo.tv/" },
        { name: "The News International", link: "https://www.thenews.com.pk/" },
        { name: "Associated Press (AP) News", link: "https://apnews.com/" },
        { name: "BBC News", link: "https://www.bbc.com/news" },
        { name: "Transparency International Pakistan", link: "https://www.transparency.org/en/countries/pakistan" }
    ],
    cases: []
},
{
    id: 4,
    name: "Asif Ali Zardari",
    role: "President of Pakistan",
    institution: "Pakistan Peoples Party (PPP)",
    tenure: "2024–present (previously 2008–2013)",
    status: "active",
    photo: "images/asif-ali-zardari.jpg",
    summary: "Asif Ali Zardari has spent decades at the center of Pakistan's political and legal controversies. He has faced numerous corruption investigations in Pakistan and abroad, earning the nickname 'Mr. 10 Percent' from critics. Many cases were later closed, ended without conviction, or remained unresolved after years of litigation.",
    hisaabScore: {
        officesHeld: 5,
        investigations: 18,
        courtCases: 12,
        convictions: 0,
        acquittals: 0,
        documentedCriticism: 12,
        unverifiedAllegations: 8,
        reportsMentioning: 15
    },
    scoreNote: "Zardari has faced numerous investigations but has not been finally convicted in the major corruption cases that defined his political career. Many proceedings were withdrawn, acquitted, or remained unresolved.",
    record: [
        { year: "1990s", text: "Critics began referring to Zardari as 'Mr. 10 Percent', alleging he received kickbacks from government contracts. He has consistently denied the allegations.", tag: "ALLEGATION", cls: "status-pending" },
        { year: "1997", text: "Named in the SGS and Cotecna customs inspection scandal involving alleged kickbacks on customs contracts.", tag: "CORRUPTION CASE", cls: "status-investigation" },
        { year: "1997–2003", text: "Swiss authorities investigated alleged money laundering linked to Pakistani funds. Proceedings were eventually closed without a conviction.", tag: "SWISS CASE", cls: "status-acquitted" },
        { year: "1998", text: "Surrey Palace in the UK became the subject of investigations over its alleged ownership and funding.", tag: "PROPERTY CASE", cls: "status-investigation" },
        { year: "1990s–2004", text: "Spent years in prison while facing multiple corruption and criminal cases before being released.", tag: "LEGAL PROCEEDINGS", cls: "status-investigation" },
        { year: "1996", text: "Political opponents alleged involvement in the killing of Mir Murtaza Bhutto. No court found him guilty.", tag: "UNPROVEN ALLEGATION", cls: "status-acquitted" },
        { year: "2007", text: "Benefited from the National Reconciliation Ordinance (NRO), which withdrew numerous corruption cases before the law was later struck down by the Supreme Court.", tag: "NRO", cls: "status-investigation" },
        { year: "2008", text: "Elected President of Pakistan following the general elections.", tag: "ELECTED", cls: "status-completed" },
        { year: "2008–2013", text: "His presidency was marked by criticism over corruption, governance, energy shortages, and security challenges.", tag: "GOVERNANCE", cls: "status-pending" },
        { year: "2009", text: "The Supreme Court struck down the NRO, reopening several previously closed corruption investigations.", tag: "SUPREME COURT", cls: "status-investigation" },
        { year: "2015", text: "Named in investigations related to fake bank accounts allegedly used for money laundering and suspicious transactions.", tag: "FAKE ACCOUNTS", cls: "status-investigation" },
        { year: "2018", text: "NAB filed the Park Lane reference alleging misuse of loans and company assets. Zardari denied wrongdoing.", tag: "NAB REFERENCE", cls: "status-investigation" },
        { year: "2018", text: "Investigated over the Tosha Khana vehicle matter involving state gifts. He denied any illegal conduct.", tag: "TOSHA KHANA", cls: "status-investigation" },
        { year: "2019", text: "Questioned in connection with the Bahria Town settlement and related financial transaction allegations.", tag: "BAHRIA TOWN", cls: "status-investigation" },
        { year: "2019", text: "Faced the Clifton property and JV Opal references filed by NAB.", tag: "PROPERTY REFERENCES", cls: "status-investigation" },
        { year: "2020", text: "Named in inquiries concerning alleged assets beyond known sources of income.", tag: "ASSETS CASE", cls: "status-investigation" },
        { year: "2021", text: "Several NAB references were affected after legal and legislative changes to accountability laws.", tag: "LEGAL DEVELOPMENTS", cls: "status-pending" },
        { year: "2024", text: "Elected President of Pakistan for a second term.", tag: "ELECTED", cls: "status-completed" },
        { year: "Ongoing", text: "The PPP government in Sindh continues to face long-standing criticism over governance, infrastructure, education, healthcare, corruption, and municipal services. The party disputes many of these criticisms and points to development projects.", tag: "GOVERNANCE CRITICISM", cls: "status-pending" }
    ],
    promises: [
        { text: "Strengthen democracy and constitutional institutions.", status: "ongoing" },
        { text: "Promote national political stability.", status: "ongoing" },
        { text: "Support economic recovery.", status: "ongoing" }
    ],
    // NEEDS SOURCE: homepage links only — swap for the specific article/
    // ruling behind each claim above.
    sources: [
        { name: "National Accountability Bureau (NAB)", link: "https://nab.gov.pk/" },
        { name: "Supreme Court of Pakistan", link: "https://www.supremecourt.gov.pk/" },
        { name: "Reuters", link: "https://www.reuters.com/" },
        { name: "Dawn", link: "https://www.dawn.com/" },
        { name: "Geo News", link: "https://www.geo.tv/" },
        { name: "The News International", link: "https://www.thenews.com.pk/" },
        { name: "BBC News", link: "https://www.bbc.com/news" },
        { name: "Wikipedia — Asif Ali Zardari", link: "https://en.wikipedia.org/wiki/Asif_Ali_Zardari" }
    ],
    cases: []
},
{
    id: 5,
    name: "Bilawal Bhutto Zardari",
    role: "Chairman of Pakistan Peoples Party (PPP)",
    institution: "Pakistan Peoples Party (PPP)",
    tenure: "2018–present",
    status: "active",
    photo: "images/bilawal-bhutto-zardari.jpg",
    summary: "Bilawal Bhutto Zardari entered Pakistani politics as the successor of the Bhutto political legacy. Supporters describe him as a young democratic leader and international voice, while critics argue that his political career represents dynastic politics and remains connected to PPP's historical controversies, governance record in Sindh, accountability debates, and coalition decisions.",
    hisaabScore: {
        officesHeld: 4,
        investigations: 1,
        courtCases: 0,
        convictions: 0,
        acquittals: 0,
        documentedCriticism: 20,
        unverifiedAllegations: 6,
        reportsMentioning: 30
    },
    scoreNote: "Bilawal Bhutto Zardari has not been convicted of corruption or any criminal offense. Criticism against him mainly focuses on PPP's governance record, political decisions, party controversies involving senior members, dynastic politics debate, and promises compared with performance.",
    record: [
        { year: "2007", text: "After the assassination of Benazir Bhutto, Bilawal was appointed Chairman of Pakistan Peoples Party. Critics questioned whether his leadership position came from family inheritance rather than independent political experience.", tag: "DYNASTIC POLITICS", cls: "status-pending" },
        { year: "2013", text: "Bilawal started taking a more active role in PPP politics and election campaigns. Opponents criticized his limited administrative experience.", tag: "POLITICAL EXPERIENCE", cls: "status-pending" },
        { year: "2018", text: "Led PPP during the general election campaign. Critics argued that PPP struggled to present a new political identity beyond the Bhutto family legacy.", tag: "ELECTION CRITICISM", cls: "status-pending" },
        { year: "2018–present", text: "Opponents accuse PPP of dynastic politics because leadership has remained within the Bhutto-Zardari family. PPP argues that leadership comes through party support and democratic processes.", tag: "FAMILY POLITICS", cls: "status-pending" },
        { year: "2019", text: "Fake Accounts investigations involving senior PPP leadership affected the party's public image. Bilawal's name appeared in investigation documents and he was questioned by NAB. He denied wrongdoing.", tag: "FAKE ACCOUNTS CASE", cls: "status-investigation" },
        { year: "2019", text: "Bilawal's name appeared in the Joint Investigation Team (JIT) report related to the fake accounts case. The Supreme Court later ordered removal of his name from the JIT report and ECL, while allowing NAB to investigate independently if required.", tag: "FAKE ACCOUNTS JIT", cls: "status-investigation" },
        { year: "2019", text: "Park Lane investigation involving Asif Ali Zardari became part of wider criticism against PPP leadership. Bilawal was not convicted in the matter.", tag: "PARK LANE CASE", cls: "status-investigation" },
        { year: "2020", text: "Bilawal faced political criticism over questions raised regarding his asset declarations submitted to the Election Commission. The issue became part of wider debates about transparency of politicians' financial disclosures.", tag: "ASSET DECLARATION", cls: "status-pending" },
        { year: "2020", text: "Bilawal played a major role in the Pakistan Democratic Movement (PDM), an opposition alliance against the PTI government.", tag: "OPPOSITION POLITICS", cls: "status-completed" },
        { year: "2021", text: "PPP's long rule in Sindh faced criticism over Karachi infrastructure, water shortages, education quality, healthcare services, and local government performance.", tag: "SINDH GOVERNANCE", cls: "status-pending" },
        { year: "2021", text: "The Nazim Jokhio case became a major controversy after PPP MPA Jam Awais was named among accused in proceedings. Critics raised questions about political influence, accountability, and law-and-order issues in Sindh. The accused denied wrongdoing.", tag: "NAZIM JOKHIO CASE", cls: "status-investigation" },
        { year: "2021", text: "Opposition parties accused PPP of protecting influential political figures and maintaining traditional power structures in Sindh. PPP rejected these accusations.", tag: "POLITICAL PATRONAGE", cls: "status-pending" },
        { year: "2022", text: "Bilawal supported the no-confidence movement against Imran Khan and joined the coalition government. Critics accused PPP of political compromise after years of opposition politics.", tag: "COALITION POLITICS", cls: "status-pending" },
        { year: "2022", text: "Bilawal became Federal Foreign Minister. Supporters highlighted diplomatic engagement, while critics questioned his experience and whether major foreign policy goals were achieved.", tag: "FOREIGN MINISTER", cls: "status-pending" },
        { year: "2022–2023", text: "During his Foreign Minister tenure, Bilawal faced criticism over Pakistan's relations with India, Afghanistan policy, and diplomatic strategy. Opposition parties questioned whether his foreign policy produced significant results.", tag: "FOREIGN POLICY CRITICISM", cls: "status-pending" },
        { year: "2022–2023", text: "Some statements made by Bilawal during international and domestic political debates generated criticism from opponents, who accused him of controversial messaging. Supporters defended his diplomatic approach.", tag: "STATEMENT CONTROVERSIES", cls: "status-pending" },
        { year: "2022", text: "PPP-led Sindh government faced criticism over flood response, drainage failures, relief distribution, and rehabilitation efforts after devastating floods.", tag: "FLOOD RESPONSE", cls: "status-pending" },
        { year: "2022–2023", text: "Bilawal promoted climate diplomacy after Pakistan's floods. Critics debated whether international climate efforts translated into stronger domestic disaster management.", tag: "CLIMATE POLITICS", cls: "status-pending" },
        { year: "2023", text: "PPP continued facing criticism over Sindh education and healthcare systems, including questions about school conditions, healthcare access, and public service delivery.", tag: "PUBLIC SERVICES", cls: "status-pending" },
        { year: "2023", text: "Senior PPP leaders faced multiple controversies and accountability cases, contributing to criticism that Bilawal had not fully separated his leadership image from PPP's historical reputation.", tag: "PPP IMAGE PROBLEM", cls: "status-pending" },
        { year: "2023", text: "Critics argued that PPP had limited internal leadership competition because the Bhutto family has historically dominated party leadership. Supporters argued that Bilawal holds leadership through party acceptance.", tag: "PARTY LEADERSHIP CRITICISM", cls: "status-pending" },
        { year: "2018–present", text: "Bilawal's parliamentary record has been debated, including attendance, speeches, legislative participation, committee involvement, and his role in opposition and government.", tag: "PARLIAMENTARY RECORD", cls: "status-pending" },
        { year: "2024", text: "After general elections, PPP formed a coalition arrangement with PML-N. Critics questioned the alliance because PPP did not win the largest number of seats and debated whether it represented political compromise.", tag: "2024 COALITION", cls: "status-pending" },
        { year: "2024", text: "Power-sharing arrangements between PPP and PML-N became a subject of political debate, including questions about government positions, influence, and policy control.", tag: "POWER SHARING DEBATE", cls: "status-pending" },
        { year: "2024", text: "Bilawal promoted promises including youth employment, economic relief, healthcare expansion, education reforms, and stronger democratic institutions.", tag: "POLITICAL PROMISES", cls: "status-completed" },
        { year: "2024–present", text: "Critics continue questioning PPP's ability to deliver on promises related to jobs, inflation relief, Karachi development, transparency, and governance reforms.", tag: "PROMISE VS REALITY", cls: "status-pending" },
        { year: "Ongoing", text: "Bilawal's biggest political challenge remains separating his leadership identity from PPP's historical reputation while proving that he represents a new direction in Pakistani politics.", tag: "FINAL DEBATE", cls: "status-pending" }
    ],
    promises: [
        { text: "Create employment opportunities for Pakistani youth.", status: "ongoing" },
        { text: "Reduce poverty and provide economic relief.", status: "ongoing" },
        { text: "Improve education and healthcare systems.", status: "ongoing" },
        { text: "Improve Karachi infrastructure and governance.", status: "ongoing" },
        { text: "Strengthen democracy and constitutional institutions.", status: "ongoing" },
        { text: "Provide climate leadership and disaster protection.", status: "ongoing" }
    ],
    // NEEDS SOURCE: homepage links only — swap for the specific article
    // behind each claim above.
    sources: [
        { name: "Pakistan Peoples Party Official Website", link: "https://pppp.org.pk/" },
        { name: "Election Commission of Pakistan", link: "https://www.ecp.gov.pk/" },
        { name: "Reuters", link: "https://www.reuters.com/" },
        { name: "Dawn", link: "https://www.dawn.com/" },
        { name: "BBC News", link: "https://www.bbc.com/news" },
        { name: "Geo News", link: "https://www.geo.tv/" },
        { name: "The News International", link: "https://www.thenews.com.pk/" }
    ],
    cases: []
},
{
    id: 6,
    name: "Nawaz Sharif",
    role: "Former Prime Minister of Pakistan; President, PML-N",
    institution: "Executive",
    tenure: "PM: 1990–1993, 1997–1999, 2013–2017 (three terms, none completed)",
    status: "former",
    photo: "images/nawaz-sharif.jpg",
    summary: "Sharif has been removed from the premiership three times without finishing a term — dismissed in 1993, ousted in the 1999 military coup, and disqualified for life by the Supreme Court in 2017. The 2016 Panama Papers leak tied his children to undisclosed London properties held through offshore companies; the resulting references convicted him in 2018 in both the Avenfield and Al-Azizia cases, while a third reference ended in acquittal. He left for medical treatment in London in 2019 and remained abroad for over four years while the sentences stood. After returning to Pakistan in 2023 ahead of his party's return to power, courts overturned both convictions in late 2023 and the Supreme Court struck down the lifetime disqualification rule itself in January 2024, clearing him to contest again.",
    hisaabScore: {
        officesHeld: 3,
        investigations: 3,
        courtCases: 4,
        convictions: 3,
        acquittals: 4,
        ongoing: 0,
        reportsMentioning: 4
    },
    record: [
        { year: "1993", text: "Dismissed as Prime Minister on corruption and mismanagement charges; the Supreme Court reinstated him, but he was forced to resign months later under military pressure.", tag: "DISMISSED — REINSTATED", cls: "status-pending" },
        { year: "1999", text: "Convicted of hijacking and terrorism for blocking Gen. Pervez Musharraf's plane from landing during the coup that removed him — sentenced to life imprisonment.", tag: "CONVICTED", cls: "status-convicted" },
        { year: "2000", text: "Sentence set aside and sent into exile in Saudi Arabia under a deal brokered by the Saudi government, rather than serving the term.", tag: "EXILED — SENTENCE VOIDED", cls: "status-pending" },
        { year: "2000, 2017", text: "Hudaibiya Paper Mills money-laundering reference: the Lahore High Court quashed the case in 2014; NAB's appeal against that decision was dismissed by the Supreme Court in December 2017, closing the case for good.", tag: "CLOSED", cls: "status-acquitted" },
        { year: "2016", text: "Panama Papers leak revealed his children held undisclosed London properties through offshore companies — the scandal that triggered his removal from office.", tag: "DOCUMENTED", cls: "status-investigation" },
        { year: "2017", text: "Disqualified for life from holding public office by the Supreme Court for failing to declare a receivable salary as an asset.", tag: "DISQUALIFIED", cls: "status-convicted" },
        { year: "2018", text: "Convicted in the Avenfield reference (10 years, London flats confiscated) and the Al-Azizia Steel Mills reference (7 years, $25M fine); acquitted the same day in a third reference, Flagship Investments.", tag: "CONVICTED — 2 OF 3", cls: "status-convicted", highlight: true },
        { year: "2019–23", text: "Left for London on medical bail months after conviction and remained abroad for over four years while the sentences stood.", tag: "MEDICAL BAIL ABROAD", cls: "status-pending" },
        { year: "2023", text: "Returned to Pakistan in October 2023 ahead of the 2024 election; the Islamabad High Court overturned the Avenfield conviction on Nov 29, 2023 and the Al-Azizia conviction on Dec 12, 2023.", tag: "ACQUITTED ON APPEAL", cls: "status-acquitted", highlight: true },
        { year: "2024", text: "A 7-member Supreme Court bench ruled 6-1 that lifetime disqualification under Article 62(1)(f) is unconstitutional and can only apply for five years, striking down its own 2018 precedent and clearing Sharif to contest the February 2024 election.", tag: "DISQUALIFICATION RULE STRUCK DOWN", cls: "status-acquitted", highlight: true }
    ],
    promises: [],
    sources: [
        { name: "ICIJ — Pakistani PM disqualified over Panama Papers links", link: "https://www.icij.org/investigations/panama-papers/20170728-pakistan-pm-disqualified/" },
        { name: "Al Jazeera — Supreme Court disqualifies Nawaz Sharif (2017)", link: "https://www.aljazeera.com/news/2017/7/28/pakistan-supreme-court-disqualifies-nawaz-sharif" },
        { name: "Dawn — IHC acquits Nawaz Sharif in Avenfield reference (Nov 2023)", link: "https://www.dawn.com/news/1793562" },
        { name: "Dawn — Nawaz cleared in Al-Azizia reference (Dec 2023)", link: "https://www.dawn.com/news/1797271" },
        { name: "Dawn — SC rules against lifetime disqualification (Jan 2024)", link: "https://www.dawn.com/news/1804198" },
        { name: "Dawn — SC dismisses NAB's Hudaibiya Paper Mills appeal (2017)", link: "https://www.dawn.com/news/1376762" }
    ],
    cases: []
},
{
    id: 7,
    name: "Faryal Talpur",
    role: "Senior PPP Leader; Former Member, National Assembly (Sindh)",
    institution: "Executive",
    tenure: "MNA: 2008–2018 (sister of Asif Ali Zardari)",
    status: "former",
    photo: "images/faryal-talpur.jpg",
    summary: "Talpur is the central non-officeholder figure in the 2018 Fake Bank Accounts case — a Supreme Court-ordered JIT investigation into fictitious accounts allegedly used to launder billions of rupees through business figure Anwar Majeed's Omni Group, with the money trail tied to her brother Asif Ali Zardari's assets. NAB arrested her in July 2019 and held her for months before she was granted bail on medical grounds, citing cancer treatment. Her personal wealth was separately examined under an assets-beyond-known-income inquiry tied to the same probe. The case has dragged through accountability courts for years without a final verdict — a pattern common to Pakistan's post-2018 NAB references, several of which stalled or narrowed after the 2022 NAB Amendment Act raised the financial threshold for prosecutable cases.",
    hisaabScore: {
        officesHeld: 1,
        investigations: 2,
        courtCases: 1,
        convictions: 0,
        acquittals: 0,
        ongoing: 2,
        reportsMentioning: 3
    },
    record: [
        { year: "2018", text: "Named in the Supreme Court-ordered JIT investigation into fake bank accounts allegedly used to launder billions of rupees through the Omni Group.", tag: "NAMED IN JIT", cls: "status-investigation" },
        { year: "2019", text: "Arrested by NAB in the Fake Accounts case and held in custody for several months.", tag: "ARRESTED", cls: "status-investigation", highlight: true },
        { year: "2019", text: "NAB separately examined her personal wealth under an \"assets beyond known income\" inquiry tied to the same fake-accounts probe — no separate verdict reached.", tag: "UNDER INQUIRY", cls: "status-investigation" },
        { year: "2019–20", text: "Granted bail by the courts on medical grounds, citing cancer treatment.", tag: "BAILED — MEDICAL GROUNDS", cls: "status-pending" },
        { year: "2019–present", text: "Her bail on medical grounds has been repeatedly extended by the courts in the years since her release, with the underlying trial still unresolved.", tag: "REPEATEDLY EXTENDED", cls: "status-pending" },
        { year: "2020s", text: "Trial has continued in accountability court for years without a final verdict — no conviction or acquittal reached to date.", tag: "UNRESOLVED", cls: "status-investigation" }
    ],
    promises: [],
    // NEEDS SOURCE: still placeholders — not yet independently verified.
    sources: [
        { name: "Dawn — Fake Accounts case / JIT findings", link: "https://www.dawn.com/news/1633448" },
        { name: "The News International — NAB arrest and bail coverage", link: "https://www.thenews.pk/print/1428167-nab-cases-fall-under-fcc-sc" },
        { name: "The Express Tribune — Omni Group money trail reporting", link: "https://tribune.com.pk/story/1870699/fake-accounts-case-jit-submits-money-laundering-inquiry-report" }
    ],
    cases: []
},
{
    id: 8,
    name: "Murad Ali Shah",
    role: "Chief Minister of Sindh",
    institution: "Provincial Government",
    tenure: "2016 – 2018, 2018 – present",
    status: "active",
    photo: "images/murad-ali-shah.jpg",
    summary: "Unlike other PPP figures in this record, Shah has few well-documented personal corruption cases attached to his name — the criticism of his government is administrative, not legal. Karachi's recurring urban flooding, chronic solid-waste failures, an illegal water-tanker economy, and stalled transit and water projects (Red Line BRT, K-IV) have all been repeatedly blamed on his provincial government. Sindh's education and police departments have faced long-standing allegations of 'ghost' school and staff funding and political interference in postings, respectively. His government also drew a mixed record on COVID-19 — credited for acting ahead of the federal government in 2020, criticized for uneven enforcement and relief. Where his name has surfaced in the larger Fake Accounts JIT probe, it has been in reference to provincial decisions, not a personal charge.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 0,
        courtCases: 0,
        convictions: 0,
        acquittals: 0,
        ongoing: 0,
        reportsMentioning: 6
    },
    record: [
        { year: "2020", text: "Credited for early, assertive COVID-19 lockdown measures in Sindh, ahead of the federal government — critics said enforcement and relief distribution were uneven.", tag: "MIXED RECORD", cls: "status-pending" },
        { year: "2020, 2022", text: "Repeated catastrophic urban flooding exposed decades of neglected drainage infrastructure in Karachi; rehabilitation after the 2022 floods was criticized as slow.", tag: "GOVERNANCE CRITICISM", cls: "status-pending", highlight: true },
        { year: "Ongoing", text: "Karachi's chronic garbage-collection failures have repeatedly been blamed on jurisdictional disputes between his provincial government and the city's local administration.", tag: "SERVICE FAILURE", cls: "status-pending" },
        { year: "Ongoing", text: "An illegal water-tanker economy has operated in Karachi for years amid allegations of collusion with local officials, without decisive provincial action.", tag: "DOCUMENTED PATTERN", cls: "status-pending" },
        { year: "Ongoing", text: "Sindh's education department has faced long-standing allegations of \"ghost schools\" and \"ghost teachers\" — funded positions with no functioning school or staff attending.", tag: "ALLEGED", cls: "status-alleged" },
        { year: "Ongoing", text: "Police reform has stalled for years amid criticism of political interference in postings and transfers, alongside rising street crime in Karachi.", tag: "GOVERNANCE CRITICISM", cls: "status-pending" },
        { year: "Ongoing", text: "Provincial legislation has repeatedly curtailed the powers of Karachi's elected local government — a long-running dispute with the city's own mayor's office.", tag: "POWER DISPUTE", cls: "status-pending" },
        { year: "2016–present", text: "The Red Line Bus Rapid Transit project and the K-IV water project, both meant to address core Karachi infrastructure gaps, have faced years of delay under his government.", tag: "DOCUMENTED DELAY", cls: "status-pending" },
        { year: "2018", text: "A provincial decision involving a sugar mill near Thatta was referenced in the Fake Accounts JIT report as part of the broader Omni Group probe — not a personal charge against him.", tag: "MENTIONED IN JIT", cls: "status-pending" }
    ],
    promises: [],
    // NEEDS SOURCE: still placeholders — not yet independently verified.
    sources: [
        { name: "Dawn — Karachi flooding / infrastructure coverage", link: "https://www.dawn.com/news/1959924" },
        { name: "The Express Tribune — K-IV and Red Line BRT delay reporting", link: "https://tribune.com.pk/story/2519808/k-electric-blamed-for-delay-in-karachis-red-line-project" },
        { name: "Dawn — Sindh education \"ghost schools\" reporting", link: "https://www.dawn.com/news/293272/karachi-8-000-ghost-schools-in-sindh-minister" }
    ],
    cases: []
},
{
    id: 9,
    name: "Pervez Musharraf",
    role: "Former President of Pakistan; Former Chief of Army Staff",
    institution: "Military",
    tenure: "COAS: 1998–2007; President: 2001–2008 (held both simultaneously)",
    status: "former",
    photo: "images/pervez-musharraf.jpg",
    summary: "Musharraf seized power in the October 1999 coup that overthrew Nawaz Sharif, months after the Kargil conflict he is widely blamed for having engineered as army chief. His 2007 crisis year alone included suspending the judiciary, ordering the deadly Lal Masjid raid, issuing a sweeping corruption amnesty later struck down as unconstitutional, and declaring emergency rule — all while Benazir Bhutto was assassinated under his government's security arrangements, a killing a UN inquiry later found could have been prevented and was followed by a severely flawed investigation. He became the first former army chief in Pakistani history to be charged with, and in 2019 sentenced to death for, high treason. A 2020 Lahore High Court ruling voided that sentence on procedural grounds, but in January 2024 — nearly a year after Musharraf's death — the Supreme Court set aside the LHC's ruling and restored the death sentence, a largely symbolic act since he had already died in Dubai in 2023 with several other cases against him still unresolved.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 5,
        courtCases: 4,
        convictions: 1,
        acquittals: 1,
        ongoing: 0,
        reportsMentioning: 4
    },
    record: [
        { year: "1999", text: "Led the October 1999 military coup that overthrew PM Nawaz Sharif's government, months after the Kargil conflict he is widely blamed for engineering as army chief.", tag: "COUP", cls: "status-convicted" },
        { year: "2003", text: "During Pervez Musharraf's government, Aafia Siddiqui disappeared from Pakistan. Pakistani authorities later stated that she had been handed over to U.S. authorities. Her family and supporters alleged involvement of Pakistani security agencies, while Musharraf-era officials denied wrongdoing. No court has established that Musharraf personally ordered or carried out her transfer.", tag: "AAFIA SIDDIQUI CONTROVERSY", cls: "status-investigation" },
        { year: "2007", text: "Suspended Chief Justice Iftikhar Chaudhry, triggering the Lawyers' Movement; dismissed him and several other judges again months later during the emergency.", tag: "JUDGES DETAINED", cls: "status-investigation" },
        { year: "Jul 2007", text: "Ordered the military's storming of the Lal Masjid (Red Mosque) after a prolonged standoff, resulting in over 100 deaths — criticized both for the escalation and the raid's conduct.", tag: "CONTESTED OPERATION", cls: "status-investigation", highlight: true },
        { year: "Oct 2007", text: "Issued the National Reconciliation Ordinance, granting amnesty from corruption prosecutions to Benazir Bhutto, Asif Zardari, and thousands of others — later declared unconstitutional by the Supreme Court in 2009.", tag: "STRUCK DOWN", cls: "status-convicted" },
        { year: "Nov 2007", text: "Declared a state of emergency, suspended the constitution, and imposed a media blackout — the act that later formed the basis of his treason conviction.", tag: "TREASON BASIS", cls: "status-convicted" },
        { year: "Dec 2007", text: "Benazir Bhutto was assassinated after a rally under his government's security arrangements; a 2010 UN Commission of Inquiry found her death could have been prevented with adequate security and that the subsequent police investigation was severely hampered, including by Pakistan's intelligence agencies.", tag: "SECURITY FAILURE", cls: "status-investigation", highlight: true },
        { year: "2013", text: "Charged with treason under Article 6 over the 2007 emergency — the first time a former Pakistani army chief faced such a charge.", tag: "CHARGED", cls: "status-investigation" },
        { year: "2016", text: "Allowed to leave Pakistan for medical treatment while on the Exit Control List; never returned to face any pending trial.", tag: "LEFT — NEVER RETURNED", cls: "status-pending" },
        { year: "2019", text: "Acquitted in the Benazir Bhutto assassination conspiracy case by an anti-terrorism court, citing lack of evidence.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "Dec 2019", text: "Sentenced to death in absentia for high treason by a special court — the first such sentence for a former head of state in Pakistan's history.", tag: "CONVICTED — DEATH SENTENCE", cls: "status-convicted", highlight: true },
        { year: "Jan 2020", text: "The Lahore High Court declared the special court's formation unconstitutional, voiding the death sentence on procedural grounds without reversing the treason finding on the merits.", tag: "VOIDED ON TECHNICALITY", cls: "status-pending" },
        { year: "2023", text: "Died in Dubai in February 2023 while multiple proceedings, including the Lal Masjid and judges' detention cases, remained unresolved — all abated by his death.", tag: "DIED — CASES ABATED", cls: "status-pending" },
        { year: "Jan 2024", text: "Nearly a year after his death, a Supreme Court bench headed by CJP Qazi Faez Isa set aside the Lahore High Court's 2020 ruling and restored the December 2019 death sentence for high treason — a symbolic, posthumous outcome with no practical effect.", tag: "DEATH SENTENCE POSTHUMOUSLY RESTORED", cls: "status-convicted", highlight: true }
    ],
    promises: [],
    sources: [
        { name: "Al Jazeera — LHC rules special court in Musharraf treason case unconstitutional (2020)", link: "https://www.aljazeera.com/news/2020/1/13/judges-say-special-court-in-musharraf-case-was-unconstitutional" },
        { name: "Dawn — Supreme Court upholds/restores Musharraf's death sentence (Jan 2024)", link: "https://www.dawn.com/news/1804694" },
        { name: "UN Commission of Inquiry — full report on Benazir Bhutto's assassination (2010, primary source PDF)", link: "https://www.files.ethz.ch/isn/125434/5067_UN_Bhutto_Report_15April2010.pdf" },
        { name: "CNN — UN report: Bhutto assassination was preventable (2010)", link: "https://www.cnn.com/2010/WORLD/asiapcf/04/15/pakistan.bhutto.report/index.html" }
    ],
    cases: []
},
{
    id: 10,
    name: "Qamar Javed Bajwa",
    role: "Former Chief of Army Staff",
    institution: "Military",
    tenure: "2016 – 2022",
    status: "former",
    photo: "images/qamar-bajwa.jpg",
    summary: "Bajwa commanded the army through some of Pakistan's most contested political years — including the 2018 election opposition parties say was engineered in Imran Khan's favor — without ever facing a single formal investigation or court case, despite serious documented allegations. A 2024 Fact Focus investigative report alleged relatives of his — separate from the earlier, better-known Fact Focus story about a different general, Asim Saleem Bajwa's family — amassed billions of rupees in assets during his tenure as army chief, a claim distinct from that unrelated case. His contested 2019 extension required the Supreme Court to intervene and Parliament to pass new legislation just to formalize it. After Imran Khan's 2022 ouster, Khan publicly and repeatedly accused Bajwa of conspiring with U.S. officials to remove him — a claim Bajwa denied. He retired in November 2022 with no legal proceeding ever brought against him.",
    hisaabScore: {
        officesHeld: 1,
        investigations: 0,
        courtCases: 0,
        convictions: 0,
        acquittals: 0,
        ongoing: 0,
        reportsMentioning: 3
    },
    record: [
        { year: "2016", text: "Appointed Chief of Army Staff, superseding several more senior generals — a selection Imran Khan's government later credited as a personal loyalty pick.", tag: "APPOINTMENT", cls: "status-pending" },
        { year: "2018", text: "Opposition parties and independent analysts alleged the military under his command helped engineer the 2018 election in Imran Khan's favor — a claim never independently adjudicated.", tag: "DISPUTED", cls: "status-pending" },
        { year: "2019", text: "Granted a 3-year extension as army chief; the Supreme Court initially suspended the notification for lacking legal basis, forcing Parliament to pass new legislation formalizing the process.", tag: "EXTENSION CONTESTED", cls: "status-investigation", highlight: true },
        { year: "2024", text: "A Fact Focus investigation alleged relatives of Qamar Javed Bajwa acquired assets worth billions of rupees during his tenure as army chief — a separate story from the earlier, more widely cited Fact Focus report on a different general, Asim Saleem Bajwa's family business empire.", tag: "ALLEGED NEPOTISM", cls: "status-alleged", highlight: true },
        { year: "2022", text: "After Imran Khan's removal in a no-confidence vote, Khan repeatedly accused Bajwa of colluding with U.S. officials in a \"regime-change conspiracy\" — an allegation Bajwa and the U.S. government both denied.", tag: "UNVERIFIED", cls: "status-pending" },
        { year: "2022", text: "Retired as army chief in November 2022 having faced no formal court case, investigation, or conviction despite the scale of the allegations against him and his family.", tag: "NO FORMAL CASE FILED", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "Fact Focus — Army Chief Qamar Bajwa's family wealth investigation", link: "https://factfocus.com/investigative/2966/" },
        { name: "Fact Focus — Asim Saleem Bajwa family business empire (a different general — do not conflate)", link: "https://factfocus.com/investigative/1756/" },
        { name: "VOA — Pakistan probes rare media leak of army chief's family wealth (2022)", link: "https://www.voanews.com/amp/pakistan-probes-rare-media-leak-of-powerful-army-chief-s-family-wealth-/6844088.html" }
    ],
    cases: []
},
{
    id: 11,
    name: "Malik Riaz Hussain",
    role: "Real Estate Tycoon; Founder & Chairman, Bahria Town",
    institution: "Business & Media",
    tenure: "Bahria Town founded 1996 – present",
    status: "active",
    photo: "images/malik-riaz.jpg",
    summary: "Riaz built Bahria Town into Pakistan's largest private real estate empire, and its legal troubles are just as large. In 2019 the Supreme Court found Bahria Town Karachi had acquired roughly 16,000 acres of state and private land through fraud and illegal means, ordering a settlement exceeding Rs 460 billion — one of the largest in Pakistan's judicial history — paid in installments rather than through criminal prosecution. That same year, the UK's National Crime Agency froze roughly £190 million in assets linked to his family in a money-laundering investigation; the funds were surrendered to the Pakistani state in a no-fault settlement, with no charges filed. Those same funds later became central to a separate corruption case against former PM Imran Khan and his wife, after prosecutors alleged his family donated land to a trust linked to the couple around the time of the settlement, in exchange, prosecutors allege, for favorable treatment. Bahria Town's expansion across multiple cities has also drawn recurring accusations of coercive land acquisition from local landowners and farmers.",
    hisaabScore: {
        officesHeld: 0,
        investigations: 4,
        courtCases: 2,
        convictions: 0,
        acquittals: 0,
        ongoing: 1,
        reportsMentioning: 4
    },
    record: [
        { year: "1996–present", text: "Built Bahria Town into Pakistan's largest private real estate developer, expanding gated communities across Karachi, Lahore, Rawalpindi, and beyond.", tag: "BUSINESS EXPANSION", cls: "status-pending" },
        { year: "2018–19", text: "Supreme Court found Bahria Town Karachi acquired roughly 16,000 acres of state and private land through fraud and illegal means.", tag: "COURT FINDING", cls: "status-investigation", highlight: true },
        { year: "2019", text: "Ordered by the Supreme Court to pay a settlement exceeding Rs 460 billion in installments — one of the largest settlements in Pakistan's judicial history — in lieu of criminal prosecution.", tag: "SETTLEMENT — NO PROSECUTION", cls: "status-pending" },
        { year: "2019", text: "UK's National Crime Agency froze roughly £190 million in assets linked to his family in a money-laundering investigation; funds were surrendered to the Pakistani state under a no-fault settlement, with no charges filed.", tag: "SETTLED — NO CHARGES", cls: "status-investigation" },
        { year: "2023–present", text: "Those same funds became central to a separate corruption case against former PM Imran Khan and his wife Bushra Bibi, after prosecutors alleged his family donated land to a trust linked to the couple in exchange for favorable settlement treatment.", tag: "NAMED IN CASE", cls: "status-investigation", highlight: true },
        { year: "Recurring", text: "Bahria Town's expansion has repeatedly drawn accusations of coercive land acquisition from local farmers and landowners across multiple cities.", tag: "ALLEGED PATTERN", cls: "status-alleged" },
        { year: "Recurring", text: "Widely reported to maintain close ties across Pakistan's major political parties and the military establishment — ties critics say have shaped unusually lenient outcomes in his legal troubles.", tag: "ALLEGED INFLUENCE", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "Dawn — Supreme Court Bahria Town Karachi land settlement", link: "https://www.dawn.com/news/1469403" },
        { name: "BBC / Guardian — UK NCA £190 million asset freeze", link: "https://www.theguardian.com/uk-news/2019/dec/03/pakistani-tycoon-malik-riaz-hussain-hands-over-pounds-190m-to-uk-authorities-nca-" },
        { name: "Dawn — Al-Qadir Trust case, Imran Khan / Bushra Bibi", link: "https://www.dawn.com/news/2015127" },
        { name: "Geo News — Bahria Town land-acquisition disputes", link: "https://www.geo.tv/latest/546415-nab-team-raids-bahria-towns-rawalpindi-office" }
    ],
    cases: []
},
{
    id: 12,
    name: "Shah Mahmood Qureshi",
    role: "PTI Vice Chairman; Former Foreign Minister",
    institution: "Executive",
    tenure: "Foreign Minister: 2008 – 2011, 2018 – 2022",
    status: "active",
    photo: "images/shah-mahmood-qureshi.jpg",
    summary: "Qureshi has been jailed and released repeatedly since May 2023, when he was charged alongside dozens of other PTI leaders under anti-terrorism laws following the riots that broke out after Imran Khan's arrest. His most serious case was the 2023 Cipher case, where he and Khan were accused of mishandling a classified diplomatic cable for political gain; a special court convicted and sentenced both men to 10 years in January 2024, a verdict an appellate court later set aside, acquitting them after finding the prosecution failed to prove its case. Rights groups have documented a broader pattern in which he and other PTI leaders secured bail in individual cases only to be immediately re-detained under public-order laws, without a fresh charge.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 2,
        courtCases: 2,
        convictions: 1,
        acquittals: 1,
        ongoing: 1,
        reportsMentioning: 3
    },
    record: [
        { year: "2023", text: "Charged under anti-terrorism laws alongside dozens of PTI leaders following the May 9 riots that broke out after Imran Khan's arrest.", tag: "CHARGED", cls: "status-investigation" },
        { year: "2023", text: "Charged alongside Imran Khan in the Cipher case, accused of mishandling a classified diplomatic cable for political gain.", tag: "CHARGED", cls: "status-investigation", highlight: true },
        { year: "Jan 2024", text: "Convicted in the Cipher case and sentenced to 10 years in prison alongside Khan under the Official Secrets Act.", tag: "CONVICTED", cls: "status-convicted", highlight: true },
        { year: "2024", text: "An appellate court set aside the Cipher case conviction, acquitting both him and Khan after finding the prosecution failed to prove its case.", tag: "ACQUITTED ON APPEAL", cls: "status-acquitted", highlight: true },
        { year: "2023–24", text: "Rights groups documented a pattern in which he secured bail in individual cases only to be immediately re-detained under public-order laws, without a fresh charge.", tag: "DOCUMENTED PATTERN", cls: "status-pending" },
        { year: "2023–present", text: "Several cases connected to the May 9 unrest remain unresolved.", tag: "UNRESOLVED", cls: "status-investigation" }
    ],
    promises: [],
    sources: [
        { name: "Dawn — Cipher case verdict and appeal", link: "https://www.dawn.com/news/1839771" },
        { name: "Al Jazeera / Reuters — May 9 arrests coverage", link: "https://www.aljazeera.com/news/liveblog/2023/5/9/imran-khan-arrested-live-former-pakistani-pm-under-arrest" },
        { name: "Human Rights Watch — arrest-bail-rearrest pattern documentation", link: "https://www.hrw.org/sites/default/files/report_pdf/pakistan0916_web.pdf" }
    ],
    cases: []
},
{
    id: 13,
    name: "Murtaza Wahab Siddiqui",
    role: "Mayor of Karachi; PPP",
    institution: "Karachi Metropolitan Corporation (KMC)",
    tenure: "Mayor: 19 June 2023 – present; also served as KMC Administrator, Aug 2021 – Dec 2022",
    status: "active",
    photo: "images/murtaza-wahab.jpg",
    summary: "Wahab won the 2023 mayoral election amid clashes and JI allegations of rigging. His tenure shows a recurring pattern during crises: when heavy rains kill residents or infrastructure fails, he has repeatedly opened press conferences by framing criticism itself as the problem — 'propaganda,' 'point-scoring,' 'panic' — often before addressing the deaths or damage in detail. He has faced SHC petitions over municipal tax collection and his own election. In 2026 his bicycle ambulance photo-op went viral and was widely mocked, seen by critics as symbolic of style over substance in emergency infrastructure.",
    hisaabScore: {
        officesHeld: 3,
        investigations: 0,
        courtCases: 3,
        convictions: 0,
        acquittals: 0,
        ongoing: 3,
        reportsMentioning: 10
    },
    statements: [
        {
            date: "Feb 5, 2024",
            context: "Death toll from rain reached three, including a man who drowned in a stormwater drain",
            quote: "There are difficulties and problems, but we are working",
            note: "Also said the city was 'different for' opposition leaders criticizing him, and that officials were on the streets while opposition town chairmen 'were nowhere to be seen.'",
            tag: "DEFLECTED TO OPPOSITION",
            source: 18
        },
        {
            date: "Aug 20, 2025",
            context: "At least 16 dead across two days of rain",
            quote: "When rainfall exceeds this amount, consequences become evident",
            note: "Framed the deaths mainly as a drainage-capacity/climate issue while also saying criticism and 'political point-scoring' were worsening the situation.",
            tag: "CLIMATE FRAMING",
            source: 17
        },
        {
            date: "Sept 8, 2025",
            context: "Ongoing monsoon flooding, residents stranded in streets",
            quote: "Please don't spread panic or misinformation — let us do our job",
            note: "Said 'a few hours' of flooding after each downpour was inevitable in a 'city of 20 million,' pointing to high tides and limited drain capacity.",
            tag: "DISMISSED CONCERNS AS PANIC",
            source: 21
        },
        {
            date: "Sept 15, 2025",
            context: "Second wave of monsoon rain, at least 4 dead, 400+ rescued",
            quote: "Our political opponents have launched negative propaganda",
            note: "Disputed opposition claims that a canal had washed away, saying only a 20-meter section was damaged and it was fixed within 48 hours.",
            tag: "CALLED IT PROPAGANDA",
            source: 20
        },
        {
            date: "Aug 23, 2025",
            context: "Aftermath of a three-day rain spell and traffic gridlock on Sharea Faisal",
            quote: "Even someone exceptionally capable wouldn't have been able to manage the situation",
            note: "This was one of the rarer instances where he also directly admitted 'there was a lapse in traffic management, which we should have addressed.'",
            tag: "MIXED: DEFLECTION + RARE ADMISSION",
            source: 23
        }
    ],
    record: [
        { year: "2023", text: "Elected Karachi mayor 15 June amid clashes; JI alleged the vote was rigged and declared a nationwide 'Black Day.'", tag: "DISPUTED ELECTION", cls: "status-investigation", highlight: true },
        { year: "Oct 2023", text: "SHC issued notices over a petition accusing him of abducting nominees and endorsers of a rival mayoral candidate.", tag: "PETITION FILED", cls: "status-investigation" },
        { year: "Jul-Aug 2024", text: "JI filed SHC and contempt petitions alleging he outsourced municipal tax collection to K-Electric without proper council approval.", tag: "PETITION FILED", cls: "status-investigation", highlight: true },
        { year: "Feb 2024", text: "During a rain crisis with a rising death toll, opened remarks by contrasting his critics rather than detailing relief efforts.", tag: "CRISIS DEFLECTION", cls: "status-pending", highlight: true },
        { year: "Aug 2025", text: "16 dead in two days of rain; framed the disaster primarily around drain capacity and climate change.", tag: "CRISIS RESPONSE", cls: "status-pending", highlight: true },
        { year: "Sept 2025", text: "Monsoon flooding stranded residents; told citizens not to 'spread panic or misinformation.'", tag: "CRISIS RESPONSE", cls: "status-pending", highlight: true },
        { year: "2026", text: "Bicycle ambulance ride went viral, widely mocked as emblematic of underinvestment in emergency infrastructure.", tag: "PUBLIC BACKLASH", cls: "status-pending", highlight: true }
    ],
    promises: [
        { text: "Rebuild Karachi with better roads, parks, and public services", status: "disputed — recurring monsoon deaths, drainage failures, and infrastructure complaints continue each year" }
    ],
    sources: [
        { name: "Express Tribune — Rain death toll reaches three, mayor says roads clear", link: "https://tribune.com.pk/story/2455549/karachi-mayor-says-all-roads-cleared-of-water-as-rain-death-toll-reaches-three" },
        { name: "Express Tribune — 16 dead in two days of rain", link: "https://tribune.com.pk/story/2562174/traffic-diversions-continue-as-karachi-reels-from-rain-aftermath" },
        { name: "Express Tribune — Wahab blames rain damage on climate", link: "https://tribune.com.pk/story/2562195/wahab-pins-karachi-torrential-rain-damage-on-climate-change" },
        { name: "Express Tribune — Wahab accuses JI of propaganda", link: "https://tribune.com.pk/story/2566955/murtaza-wahab-fires-back-at-ji-for-spreading-propaganda" },
        { name: "Dawn — Mayor blames monsoon woes on tides, infrastructure", link: "https://www.dawn.com/news/1940585" },
        { name: "Dawn — Wahab asks opposition to work together", link: "https://www.dawn.com/news/1934593/murtaza-wahab-asks-opposition-jis-town-chairmen-to-work-together-for-karachis-development" },
        { name: "PakWheels — Bicycle ambulance backlash explainer", link: "https://www.pakwheels.com/blog/karachi-bicycle-ambulance-murtaza-wahab-backlash/" },
        { name: "Wikipedia — Murtaza Wahab", link: "https://en.wikipedia.org/wiki/Murtaza_Wahab" }
    ],
    cases: []
},
{
    id: 14,
    name: "Mirza Aslam Beg",
    role: "Former Chief of Army Staff",
    institution: "Military",
    tenure: "COAS: 1988 – 1991",
    status: "former",
    photo: "images/mirza-aslam-beg.jpg",
    summary: "Beg took command hours after Zia-ul-Haq's death in the 1988 plane crash, and has been dogged ever since by suspicion — never proven — that he had a hand in it. His defining scandal is Mehrangate: the Supreme Court ruled in 2012 that he and ISI chief Asad Durrani acted unconstitutionally by funneling Rs 140 million in public/intelligence money to an anti-PPP alliance ahead of the 1990 election, based on Durrani's own sworn affidavit. The Court ordered the money recovered and legal action taken — over a decade later, no criminal conviction has followed. He also promoted a nuclear 'strategic depth' doctrine toward Afghanistan and faced separate, unproven claims of pushing nuclear cooperation with Iran.",
    hisaabScore: {
        officesHeld: 1,
        investigations: 2,
        courtCases: 1,
        convictions: 0,
        acquittals: 0,
        constitutionalFindings: 1,
        unverifiedAllegations: 2,
        reportsMentioning: 5
    },
    scoreNote: "Beg has one binding constitutional finding against him (Mehrangate, 2012) but zero criminal convictions — a textbook case of accountability that stalled after a court ruling.",
    record: [
        { year: "1988", text: "Appointed Chief of Army Staff following Zia-ul-Haq's death in a plane crash; unproven claims later circulated, including from Zia's own son in 2020, alleging Beg had a role in bringing down the plane. Beg denies this and says he pushed for a proper inquiry.", tag: "UNVERIFIED ALLEGATION", cls: "status-pending" },
        { year: "1990", text: "Allegedly established an 'election cell' with ISI chief Asad Durrani to manipulate the 1990 general election against the PPP by funding a rival political alliance.", tag: "ALLEGED", cls: "status-investigation", highlight: true },
        { year: "1996", text: "Air Marshal Asghar Khan filed a Supreme Court petition (HRC 19/96) against Beg, Durrani, and Younis Habib of Mehran Bank over the disbursement and misuse of public funds for political purposes.", tag: "PETITION FILED", cls: "status-investigation" },
        { year: "2012", text: "Asad Durrani submitted a sworn affidavit admitting he distributed Rs 140 million to politicians on Beg's orders to defeat the PPP in 1990.", tag: "CONFESSION ON RECORD", cls: "status-investigation", highlight: true },
        { year: "2012", text: "Supreme Court tribunal ruled Beg and Durrani violated the Constitution by facilitating the distribution of intelligence funds to politicians before the 1990 election, and ordered the government to recover the money and pursue legal action.", tag: "CONSTITUTIONAL FINDING", cls: "status-convicted", highlight: true },
        { year: "2012–present", text: "No criminal conviction has ever followed the Supreme Court's ruling — cited repeatedly as a case of accountability ordered but never delivered.", tag: "UNENFORCED", cls: "status-investigation" },
        { year: "1990s", text: "Promoted a 'strategic depth' doctrine favoring Pakistani influence in Afghanistan — a policy widely criticized by analysts for its long-term regional fallout. A policy debate, not a criminal matter.", tag: "POLICY CRITICISM", cls: "status-pending" },
        { year: "1990s", text: "Some reports and books alleged Beg supported nuclear cooperation with Iran; never the subject of a criminal conviction or official court finding.", tag: "UNVERIFIED ALLEGATION", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "Wikipedia — Mehrangate", link: "https://en.wikipedia.org/wiki/Mehrangate" },
        { name: "Wikipedia — Mirza Aslam Beg", link: "https://en.wikipedia.org/wiki/Mirza_Aslam_Beg" },
        { name: "The Express Tribune — Beg blames CIA for Zia's death", link: "https://tribune.com.pk/story/2164004/ex-pakistan-army-chief-beg-blames-cia-ziaul-haqs-death" },
        { name: "Pakistan Times — Beg profile, Mehran Bank case", link: "https://www.pakistantimes.com/gen-r-mirza-aslam-beg/" }
    ],
    cases: []
},
{
    id: 15,
    name: "Asad Durrani",
    role: "Former Director-General, Inter-Services Intelligence (ISI)",
    institution: "Military / Intelligence",
    tenure: "DG ISI: 1990 – 1992; also DG Military Intelligence; later Ambassador to Germany and Saudi Arabia",
    status: "former",
    photo: "images/asad-durrani.jpg",
    summary: "Durrani is the key confessed figure in Mehrangate — the Supreme Court's 2012 ruling that he and Army Chief Mirza Aslam Beg unconstitutionally distributed Rs 140 million in public funds to defeat Benazir Bhutto's PPP in the 1990 election, a fact Durrani himself admitted in a sworn affidavit, saying he acted on Beg's orders. No criminal conviction has followed. In 2018, he co-authored 'The Spy Chronicles' with a former Indian RAW chief, suggesting Pakistan's establishment likely knew Osama bin Laden's location and quietly cooperated in the 2011 raid — remarks that got him summoned by army leadership, placed under a formal Court of Inquiry, and barred from leaving the country for years, until a court ordered his travel ban lifted in 2021 for lack of any active case against him.",
    hisaabScore: {
        officesHeld: 3,
        investigations: 1,
        courtCases: 1,
        convictions: 0,
        acquittals: 0,
        constitutionalFindings: 1,
        reportsMentioning: 5,
        ongoing:0
    },
    scoreNote: "Durrani has one binding constitutional finding (Mehrangate) and one military Court of Inquiry (Spy Chronicles) — but zero criminal convictions in either matter.",
    record: [
        { year: "1990–92", text: "Served as Director-General of ISI under Army Chief Mirza Aslam Beg.", tag: "APPOINTMENT", cls: "status-pending" },
        { year: "1990", text: "Allegedly ran an ISI 'election cell' distributing Rs 140 million to politicians to defeat Benazir Bhutto's PPP in the 1990 general election.", tag: "ALLEGED", cls: "status-investigation", highlight: true },
        { year: "1996", text: "Named alongside Beg and Younis Habib in Asghar Khan's Supreme Court petition (HRC 19/96) over misuse of public funds for political purposes.", tag: "PETITION FILED", cls: "status-investigation" },
        { year: "2012", text: "Submitted a sworn affidavit to the Supreme Court admitting he distributed the Rs 140 million to politicians on Beg's orders.", tag: "CONFESSION ON RECORD", cls: "status-investigation", highlight: true },
        { year: "2012", text: "Supreme Court ruled Durrani and Beg acted unconstitutionally, ordering the government to recover the funds and pursue legal action. No criminal conviction has followed since.", tag: "CONSTITUTIONAL FINDING", cls: "status-convicted", highlight: true },
        { year: "2018", text: "Co-authored 'The Spy Chronicles' with ex-RAW chief A.S. Dulat, suggesting Pakistan's establishment likely knew Osama bin Laden's whereabouts and cooperated in a 'mutually agreed process' before the 2011 US raid.", tag: "CONTROVERSIAL CLAIM", cls: "status-pending", highlight: true },
        { year: "2018", text: "Summoned to Army GHQ; military ordered a formal Court of Inquiry into whether the book violated the army's code of conduct, and had his name placed on the Exit Control List (ECL), barring him from leaving Pakistan.", tag: "COURT OF INQUIRY", cls: "status-investigation", highlight: true },
        { year: "2021", text: "Islamabad High Court ordered his name removed from the ECL, noting no ongoing inquiry against him actually existed on record at that point.", tag: "TRAVEL BAN LIFTED", cls: "status-acquitted" },
        { year: "2015–18", text: "Made repeated public remarks — on bin Laden, Kashmir, and calling terror attacks like the 2014 Army Public School massacre 'collateral damage' of backing militants in Afghanistan — that drew sustained public criticism.", tag: "CRITICIZED", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "Wikipedia — Mehrangate", link: "https://en.wikipedia.org/wiki/Mehrangate" },
        { name: "Wikipedia — The Spy Chronicles", link: "https://en.wikipedia.org/wiki/The_Spy_Chronicles" },
        { name: "The Quint — What got Durrani into trouble with the ISI", link: "https://www.thequint.com/lifestyle/books/spy-chronicles-what-got-asad-durrani-into-trouble-with-isi" },
        { name: "South Asian Voices — Understanding the Spy Chronicles controversy", link: "https://southasianvoices.org/understanding-controversy-spy-chronicles/" },
        { name: "Gulf Today (Pressreader) — Court orders Durrani's name removed from ECL", link: "https://www.pressreader.com/bahrain/gulf-today/20210305/281749862092585" }
    ],
    cases: []
},
{
    id: 16,
    name: "Sharjeel Inam Memon",
    role: "Sindh Senior Minister for Information & Transport",
    institution: "Pakistan Peoples Party (PPP)",
    tenure: "Provincial Minister (various portfolios), 2013–present (with gaps)",
    status: "active",
    photo: "images/sharjeel-inam-memon.jpg",
    summary: "Memon's central case is a Rs 3.2–6 billion NAB reference alleging he rigged Sindh government advertising contracts (2013–2015) at inflated rates. He was arrested in 2017, indicted in 2018, and granted bail in 2019 — a hearing where NAB's own prosecutor conceded there was no evidence of personal kickbacks. The case has since bounced back and forth for years over jurisdiction technicalities rather than reaching a verdict on the merits, and was still unresolved as of late 2024. A separate NAB reference alleges he holds assets — land, farmhouses, factories, villas — worth billions beyond his known income. He also appeared in the 2021 Pandora Papers leak. No criminal conviction has been recorded in either case, and nothing rises to the level of a Mehrangate-style constitutional finding.",
    hisaabScore: {
        officesHeld: 1,
        investigations: 3,
        courtCases: 2,
        convictions: 0,
        acquittals: 0,
        ongoing: 2,
        reportsMentioning: 6
    },
    scoreNote: "Years of NAB references and court hearings, but the advertisement case has repeatedly stalled on jurisdiction rather than reaching a verdict — no conviction, no acquittal, still open.",
    record: [
        { year: "2016", text: "NAB filed a corruption reference alleging Memon and aides rigged Sindh government advertising contracts (2013–2015) at inflated rates, causing a loss of roughly Rs 3.2–5.75 billion to the exchequer.", tag: "NAB REFERENCE", cls: "status-investigation", highlight: true },
        { year: "2017", text: "Arrested by NAB in October; spent about 21 months in custody before being granted bail.", tag: "ARRESTED", cls: "status-investigation" },
        { year: "2018", text: "Formally indicted in the advertisement corruption case.", tag: "INDICTED", cls: "status-investigation" },
        { year: "2019", text: "Sindh High Court granted him bail; NAB's own prosecutor conceded there was no evidence Memon personally received kickbacks, though allegations of misuse of office continued.", tag: "BAIL — NO EVIDENCE OF KICKBACKS", cls: "status-pending", highlight: true },
        { year: "2019", text: "NAB opened a separate reference alleging Memon held assets — 270+ acres of agricultural land, farmhouses, factories, villas, flats — worth over Rs 2.27–2.43 billion beyond his known income, some allegedly held via benamidars (proxies).", tag: "ASSETS BEYOND MEANS", cls: "status-investigation", highlight: true },
        { year: "2020", text: "Sindh High Court confirmed pre-arrest protective bail for Memon and family members in the assets case, while directing their names be placed on the Exit Control List.", tag: "BAIL GRANTED", cls: "status-pending" },
        { year: "2021", text: "Named in the Pandora Papers leak concerning offshore financial arrangements. Being named is not itself proof of wrongdoing.", tag: "NAMED IN LEAK", cls: "status-alleged" },
        { year: "2021", text: "NAB challenged an accountability court order reopening a co-accused's frozen bank accounts in the same advertisement case, as the case continued through appeals.", tag: "APPEALED", cls: "status-investigation" },
        { year: "2023", text: "Following a Supreme Court ruling striking down NAB Amendment Ordinance changes, the advertisement case was reopened and ordered to resume from where it had stopped.", tag: "REOPENED", cls: "status-investigation" },
        { year: "2024", text: "An accountability court twice returned the billion-rupee advertisement reference to NAB over jurisdiction disputes, leaving the core case unresolved after eight years.", tag: "UNRESOLVED — JURISDICTION DISPUTE", cls: "status-investigation", highlight: true },
        { year: "Ongoing", text: "Political opponents criticize his tenure over governance, transport, and public-service delivery; he calls these accusations politically motivated.", tag: "POLITICAL CRITICISM", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "The News — Rs3.2bn graft reference returned to NAB (2024)", link: "https://www.thenews.com.pk/print/1233246-court-returns-rs3-2bn-graft-reference-against-sharjeel-others-to-nab" },
        { name: "Dawn — Rs5bn graft reference returned to NAB (2024)", link: "https://www.dawn.com/news/1860734" },
        { name: "Dawn — assets-beyond-income reference returned to NAB (2024)", link: "https://www.dawn.com/news/1877201" },
        { name: "Dawn — NAB probes assets beyond means, money laundering (2019)", link: "https://www.dawn.com/news/1492855" },
        { name: "The News — SHC confirms pre-arrest bail in assets case (2020)", link: "https://www.thenews.com.pk/print/703018-shc-confirms-pre-arrest-bail-of-sharjeel-memon-others-in-corruption-case" },
        { name: "Pakistan Today — case reopened after NAB Amendment ruling (2023)", link: "https://www.pakistantoday.com.pk/2023/09/20/court-says-sharjeel-memons-trial-in-nab-case-will-start-from-where-it-was-stopped/" }
    ],
    cases: []
},
{
    id: 17,
    name: "Syed Yousaf Raza Gillani",
    role: "Chairman of the Senate of Pakistan; Former Prime Minister",
    institution: "Pakistan Peoples Party (PPP)",
    tenure: "PM: 2008–2012; Speaker NA: 1993–1997; Chairman Senate: 2024–present",
    status: "active",
    photo: "images/yousaf-raza-gillani.jpg",
    summary: "Gillani's defining case is his 2012 conviction for contempt of court — the Supreme Court found he unlawfully refused its order to ask Swiss authorities to reopen money-laundering cases against President Asif Ali Zardari, citing presidential immunity. The Court gave him a token sentence but ruled he had ceased to be PM from the date of conviction, ending his premiership. Long before that, in 2001, an accountability court under Musharraf convicted him of illegally appointing hundreds of people to government jobs as National Assembly Speaker, and he served over five years in prison — a case he always called political. He later faced multiple NAB/FIA references, including over an illegal Universal Service Fund (USF) advertising contract and the appointment of Tauqir Sadiq as OGRA chairman; the USF case has stalled repeatedly on jurisdiction. Separate TDAP trade-subsidy fraud cases ended in acquittal in 2025.",
    hisaabScore: {
        officesHeld: 3,
        investigations: 4,
        courtCases: 3,
        convictions: 2,
        acquittals: 1,
        ongoing: 1,
        reportsMentioning: 5
    },
    scoreNote: "Two convictions on record (1990s employment case, 2012 contempt), one full acquittal (TDAP), and one advertising-contract case still stuck on jurisdiction after years.",
    record: [
        { year: "2001", text: "Arrested by NAB under Musharraf's government, accused of illegally appointing roughly 600 people to government jobs as National Assembly Speaker, causing an estimated Rs 30 million annual loss to the state.", tag: "ARRESTED", cls: "status-investigation", highlight: true },
        { year: "2001–06", text: "Convicted by an accountability court and served over five years in prison before release in 2006; he and supporters called the case politically motivated.", tag: "CONVICTED", cls: "status-convicted", highlight: true },
        { year: "2009–12", text: "As Prime Minister, refused a Supreme Court order to ask Swiss authorities to reopen money-laundering cases against President Asif Ali Zardari, arguing the President held constitutional immunity.", tag: "REFUSED COURT ORDER", cls: "status-investigation", highlight: true },
        { year: "2012", text: "Convicted of contempt of court by the Supreme Court for his refusal; given a symbolic sentence 'until rising of the court.'", tag: "CONVICTED — CONTEMPT", cls: "status-convicted", highlight: true },
        { year: "2012", text: "Supreme Court ruled his contempt conviction meant he had ceased to be Prime Minister from the date of conviction, ending his premiership.", tag: "REMOVED FROM OFFICE", cls: "status-convicted", highlight: true },
        { year: "2011–18", text: "NAB filed a reference alleging he, as then-PM and USF chairman, misused authority to award an illegal advertising campaign to Midas Pvt Ltd, bypassing proper procedure and causing a loss to the exchequer.", tag: "NAB REFERENCE", cls: "status-investigation" },
        { year: "2011–14", text: "Also referred by the Supreme Court over the allegedly illegal appointment of Tauqir Sadiq as OGRA Chairman during his government; case has remained under trial for over a decade.", tag: "UNDER TRIAL", cls: "status-investigation" },
        { year: "2019", text: "Summoned by NAB for questioning in a separate money-laundering probe alongside other senior PPP leaders.", tag: "SUMMONED", cls: "status-investigation" },
        { year: "2022", text: "Accountability court returned the USF advertising reference to NAB, ruling it fell outside the court's jurisdiction under the amended NAB law — case left unresolved.", tag: "UNRESOLVED — JURISDICTION DISPUTE", cls: "status-investigation" },
        { year: "2025", text: "Courts acquitted him in all FIA cases alleging fraudulent approval of TDAP trade subsidies, citing insufficient evidence.", tag: "ACQUITTED", cls: "status-acquitted" }
    ],
    promises: [],
    sources: [
        { name: "Supreme Court of Pakistan — detailed contempt verdict (2012, primary source PDF)", link: "https://i.dawn.com/2012/05/sc-detailed-verdict-pm-gilani-case.pdf" },
        { name: "Wikipedia — Yousaf Raza Gillani", link: "https://en.wikipedia.org/wiki/Yousaf_Raza_Gillani" },
        { name: "The News — NAB files USF advertising reference (2018)", link: "https://www.thenews.com.pk/latest/364797-nab-files-reference-against-ex-premier-yousuf-raza-gilani" },
        { name: "Business Recorder — USF reference returned to NAB over jurisdiction (2022)", link: "https://www.brecorder.com/news/amp/40197787" },
        { name: "The News — Gillani summoned by NAB in money-laundering case (2019)", link: "https://www.thenews.com.pk/latest/452521-yousuf-raza-gillani-summoned-by-nab-in-money-laundering-case" },
        { name: "NAB — Mega Cases list, Tauqir Sadiq/OGRA reference (primary source PDF)", link: "https://nab.gov.pk/wp-content/uploads/2025/02/179_x_mega_cases.pdf" }
    ],
    cases: []
},
{
    id: 18,
    name: "Raja Pervaiz Ashraf",
    role: "Former Prime Minister; Former Minister for Water & Power; PPP",
    institution: "Executive",
    tenure: "Prime Minister: 22 June 2012 – 25 March 2013; Minister for Water & Power: 2008–2011",
    status: "former",
    photo: "images/raja-pervaiz-ashraf.jpg",
    summary: "Ashraf became widely known as 'Raja Rental' over the Rental Power Projects (RPP) scheme he oversaw as Water and Power Minister — a 2008–09 program to plug electricity shortfalls that NAB alleged involved massive kickbacks and misuse of authority, with the Karkey reference alone estimating Rs22 billion in corruption. The Supreme Court ordered his arrest over the scandal in January 2013, while he was sitting Prime Minister. Despite the scale of the allegations, the major cases did not end in conviction: after prolonged NAB investigations and NAB-law amendments narrowing the definition of 'misuse of authority,' courts progressively acquitted or discharged him across 2020 and again in April 2025, when the three biggest remaining references — Karkey, Bhakki, and Sharaqpur — were all dismissed for lack of proof. He was also criticized for nepotism over a son-in-law's appointment, and for prolonged nationwide load-shedding during his tenure as Water and Power Minister.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 9,
        courtCases: 9,
        convictions: 0,
        acquittals: 9,
        ongoing: 0,
        reportsMentioning: 12
    },
    record: [
        { year: "2008–09", text: "As Minister for Water and Power, oversaw the Rental Power Projects scheme intended to address an electricity shortfall.", tag: "POLICY DECISION", cls: "status-pending", highlight: true },
        { year: "2012", text: "NAB accused him of misusing authority to secure ECC approval and financial benefits for nine rental power firms during contract awards.", tag: "ALLEGED", cls: "status-investigation", highlight: true },
        { year: "Jan 2013", text: "Supreme Court ordered his arrest over the RPP scandal while he was serving as sitting Prime Minister — one of Pakistan's biggest political controversies of the period.", tag: "ARREST ORDERED", cls: "status-investigation", highlight: true },
        { year: "2014", text: "NAB filed multiple references over individual RPP contracts, including Karkey, Bhakki, Sharaqpur, Reshma, Naudero, Satyana, Rattu Dero, Gulf, and Samundri.", tag: "CHARGED", cls: "status-investigation" },
        { year: "2013", text: "Criticized for appointing his son-in-law to a World Bank-related post during his premiership.", tag: "NEPOTISM ALLEGATION", cls: "status-pending" },
        { year: "2012–13", text: "Faced sustained criticism over nationwide load-shedding and repeated assurances the power crisis would soon ease.", tag: "POLICY CRITICISM", cls: "status-pending" },
        { year: "2020", text: "Acquitted in the Pira Ghaib rental power plant reference; NAB found unable to prove corruption charges.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2022", text: "Acquitted in the Sahiwal-Multan rental power reference under an amended definition of 'misuse of authority.'", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "Apr 2025", text: "Discharged in the Karkey reference (Rs22bn alleged corruption) along with 10 co-accused, including a former WAPDA chairman.", tag: "DISCHARGED", cls: "status-acquitted", highlight: true },
        { year: "Apr 2025", text: "Discharged/acquitted in the Bhakki (Rs96bn) and Sharaqpur references in the same judgment — closing the last of the three biggest RPP cases.", tag: "DISCHARGED / ACQUITTED", cls: "status-acquitted", highlight: true }
    ],
    promises: [],
    sources: [
        { name: "Dawn — Acquitted in Sahiwal Rental Power Project case", link: "https://www.dawn.com/news/1565158" },
        { name: "The News — Acquitted in rental power plant reference (2020)", link: "https://www.thenews.com.pk/print/677749-pervaiz-ashraf-acquitted-in-rental-power-plant-reference" },
        { name: "The News — Discharged in Karkey, Bhakki, Sharaqpur references", link: "https://www.thenews.com.pk/latest/1306370-court-discharges-raja-pervaiz-ashraf-others-in-rental-power-references" },
        { name: "Express Tribune — Cleared in multiple NAB references", link: "https://tribune.com.pk/story/2543003/ex-pm-raja-pervaiz-ashraf-cleared-in-multiple-nab-references" },
        { name: "Profit / Pakistan Today — Discharged in all three RPP cases", link: "https://profit.pakistantoday.com.pk/2025/04/30/raja-pervez-ashraf-others-discharged-in-all-three-rental-power-project-cases/" }
    ],
    cases: []
},
{
    id: 19,
    name: "Hamza Shehbaz",
    role: "Former Chief Minister of Punjab; Son of Shehbaz Sharif",
    institution: "Executive",
    tenure: "Punjab CM: April 2022 (election later overturned by Supreme Court)",
    status: "former",
    photo: "images/hamza-shahbaz.jpg",
    summary: "Hamza Shehbaz — Shehbaz Sharif's son and Nawaz Sharif's nephew — has been investigated in nearly every major case tied to his family's business network, from a Rs16 billion money-laundering probe to the Ramzan Sugar Mills scandal. He spent time in NAB custody in 2019 over assets investigators said he couldn't explain. Every major criminal case against him has ended the same way: acquitted, for lack of evidence. His one shot at real power — a brief run as Punjab Chief Minister in 2022 — was itself thrown out by the Supreme Court, which found the vote had been rigged in his favor.",
    hisaabScore: {
        officesHeld: 1,
        investigations: 4,
        courtCases: 2,
        convictions: 0,
        acquittals: 2,
        ongoing: 1,
        reportsmentioning: 3
    },
    record: [
        { year: "2019", text: "Arrested by NAB over assets beyond his known income; held in custody before being granted bail.", tag: "ARRESTED", cls: "status-investigation", highlight: true },
        { year: "2019–22", text: "FIA accused him, alongside his father, of laundering roughly Rs16 billion through anonymous \"benami\" accounts and fake banking transactions.", tag: "MONEY LAUNDERING", cls: "status-investigation" },
        { year: "Oct 2022", text: "Acquitted alongside Shehbaz Sharif in the Rs16 billion money-laundering case — a Lahore special court found insufficient basis to continue the trial.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2022", text: "His election as Punjab Chief Minister was ruled unlawful by the Supreme Court, which found the deputy speaker had illegally rejected opposing votes; his cabinet appointments and orders were declared null and void.", tag: "ELECTION OVERTURNED", cls: "status-convicted", highlight: true },
        { year: "2018–25", text: "NAB alleged around Rs200 million in public funds were used to build a bridge benefiting the family's Ramzan Sugar Mills, with laundered funds moved through employees' bank accounts. Acquitted alongside Shehbaz Sharif in 2025 after NAB found no evidence of corruption.", tag: "ACQUITTED", cls: "status-acquitted" },
        { year: "2018–22", text: "NAB investigated whether he attended Punjab Saaf Pani Company board meetings and influenced contract awards despite not officially holding a board seat.", tag: "UNDER INQUIRY", cls: "status-investigation" }
    ],
    promises: [],
    sources: [
        { name: "Dawn — Rs16 billion money-laundering acquittal, 2022", link: "#" },
        { name: "The News — Ramzan Sugar Mills acquittal, 2025", link: "#" },
        { name: "Dawn — NAB arrest over assets beyond means, 2019", link: "#" },
        { name: "The News — Punjab CM election overturned by Supreme Court, 2022", link: "#" }
    ],
    cases: []
},
{
    id:20,
    name: "Ishaq Dar",
    role: "Deputy Prime Minister & Foreign Minister; Former Finance Minister (four terms)",
    institution: "Executive",
    tenure: "Finance Minister: 1998–99, 2008, 2013–17, 2022–23; Deputy PM & FM: 2024–present",
    status: "active",
    photo: "images/ishaq-dar.jpg",
    summary: "Dar has served as Pakistan's Finance Minister four separate times, and for years his name has followed the Sharif family's biggest financial controversies. In 2000, while in NAB custody, he gave a statement implicating the Sharifs in the Hudaibiya Paper Mills case — then retracted it, saying it was made under pressure. After the 2017 Panama Papers ruling, NAB accused him of amassing assets far beyond his declared income; when he didn't return from medical treatment in London to face the charges, a court declared him a proclaimed offender and froze his Pakistani assets. He came back in 2022, had his warrants cancelled, and the case has not produced a conviction. He later won defamation cases in the UK after broadcasters couldn't back up money-laundering claims they had made about him.",
    hisaabScore: {
        officesHeld: 2,
        investigations: 4,
        courtCases: 1,
        convictions: 0,
        acquittals: 0,
        ongoing: 1,
        reportsmentioning: 3
    },
    record: [
        { year: "2000", text: "While in NAB custody, gave a statement in the Hudaibiya Paper Mills case implicating the Sharif family's financial affairs — then retracted it, saying it was made under pressure.", tag: "RETRACTED STATEMENT", cls: "status-pending" },
        { year: "2000s", text: "Named for years in the Hudaibiya Paper Mills probe; the case involved multiple people over many years and never produced a final conviction against him.", tag: "NO CONVICTION", cls: "status-acquitted" },
        { year: "2017", text: "Following the Panama Papers ruling, NAB's JIT alleged his assets grew from about Rs9.1 million in the early 1980s to roughly Rs831.6 million by 2008 — far beyond his declared income. He was indicted.", tag: "INDICTED", cls: "status-investigation", highlight: true },
        { year: "2017", text: "Declared a proclaimed offender after repeatedly failing to appear in court while in London for medical treatment; his assets in Pakistan were ordered attached.", tag: "PROCLAIMED OFFENDER", cls: "status-investigation", highlight: true },
        { year: "2017", text: "NAB opened a separate inquiry into alleged irregularities in the award of Next Generation Mobile Services (4G spectrum) licenses; no conviction has been publicly reported.", tag: "INQUIRY — NO CONVICTION", cls: "status-investigation" },
        { year: "2022", text: "Returned to Pakistan; his arrest warrants were cancelled and the assets-beyond-means case continued — it has not produced a conviction to date.", tag: "UNRESOLVED", cls: "status-pending" },
        { year: "Undated", text: "Sued UK broadcasters for defamation over money-laundering claims they could not substantiate — won apologies and settlements.", tag: "WON — ALLEGATION WITHDRAWN", cls: "status-acquitted" },
        { year: "1998–2023", text: "Criticized across his multiple terms as Finance Minister for heavy external borrowing, an artificially propped-up exchange rate, and delayed structural reforms — policy criticism, not a legal finding.", tag: "POLICY CRITICISM", cls: "status-pending" }
    ],
    promises: [],
    sources: [
        { name: "Dawn — assets-beyond-means reference and proclaimed offender status", link: "#" },
        { name: "The News — return to Pakistan, warrants cancelled, 2022", link: "#" },
        { name: "Reuters / BBC — UK defamation settlements", link: "#" },
        { name: "Dawn — Hudaibiya Paper Mills case background", link: "#" }
    ],
    cases: []
},
];
