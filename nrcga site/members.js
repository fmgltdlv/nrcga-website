// Members Page Functionality
// Embedded members data (no server required)
const membersData = {
  "stakeholderMembers": [
    {
      "company": "Advanced Spade Company",
      "stakeholderGroup": "Locator",
      "votingMember": "Daniel Kimminau",
      "website": "https://advancedspadecompany.com/",
      "type": "stakeholder"
    },
    {
      "company": "AIMS Companies",
      "stakeholderGroup": "Excavator",
      "votingMember": "Bob Jeralds",
      "website": "https://www.aimscompanies.com/",
      "type": "stakeholder"
    },
    {
      "company": "AT&T",
      "stakeholderGroup": "Telecommunications",
      "votingMember": "Wayne Scott",
      "website": "https://www.att.com/",
      "type": "stakeholder"
    },
    {
      "company": "Byrd Underground",
      "stakeholderGroup": "Excavator",
      "votingMember": "Tyler Byrd",
      "website": "http://www.byrdunderground.com/",
      "type": "stakeholder"
    },
    {
      "company": "C and S Co. Inc.",
      "stakeholderGroup": "Excavator",
      "votingMember": "Saundra Waggoner",
      "website": "https://candscoinc.com/",
      "type": "stakeholder"
    },
    {
      "company": "City of Boulder City Public Works",
      "stakeholderGroup": "Public Works",
      "votingMember": "Steve Priscu",
      "website": "https://www.bcnv.org/221/Public-Works",
      "type": "stakeholder"
    },
    {
      "company": "City of Henderson Public Works",
      "stakeholderGroup": "Public Works",
      "votingMember": "Lance Olson",
      "website": "https://www.cityofhenderson.com/government/departments/public-works",
      "type": "stakeholder"
    },
    {
      "company": "City of Las Vegas Public Works",
      "stakeholderGroup": "Public Works",
      "votingMember": "Kondala Mantri",
      "website": "https://www.lasvegasnevada.gov/Government/Departments/Public-Works",
      "type": "stakeholder"
    },
    {
      "company": "Clark County Public Works",
      "stakeholderGroup": "Public Works",
      "votingMember": "Sal Partida",
      "website": "https://www.clarkcountynv.gov/government/departments/public_works_department/index.php",
      "type": "stakeholder"
    },
    {
      "company": "Clark County Water Reclamation District",
      "stakeholderGroup": "Sewer",
      "votingMember": "Boyd Duchene",
      "website": "https://www.cleanwaterteam.com/Pages/default.aspx",
      "type": "stakeholder"
    },
    {
      "company": "Cox Communications",
      "stakeholderGroup": "Telecommunications",
      "votingMember": "Beryl Cox",
      "website": "http://cox.com",
      "type": "stakeholder"
    },
    {
      "company": "ELM Utility Services",
      "stakeholderGroup": "Locator",
      "votingMember": "Harley Hartman",
      "website": "https://elmllc.com/",
      "type": "stakeholder"
    },
    {
      "company": "Empire Cat",
      "stakeholderGroup": "Excavator",
      "votingMember": "Seth Hendrickson",
      "website": "https://www.empire-cat.com/locations/henderson",
      "type": "stakeholder"
    },
    {
      "company": "Ervin Cable Construction",
      "stakeholderGroup": "Excavator",
      "votingMember": "Andre Arandia",
      "website": "https://ervincable.com/",
      "type": "stakeholder"
    },
    {
      "company": "The Field Mapping Group",
      "stakeholderGroup": "Locator",
      "votingMember": "Charles Folashade Jr",
      "website": null,
      "type": "stakeholder"
    },
    {
      "company": "GigaPower",
      "stakeholderGroup": "Telecommunication",
      "votingMember": "Greg Lane",
      "website": "https://gigapower.com/",
      "type": "stakeholder"
    },
    {
      "company": "Google Fiber",
      "stakeholderGroup": "Telecommunication",
      "votingMember": "Michelle Koyle",
      "website": "https://fiber.google.com/",
      "type": "stakeholder"
    },
    {
      "company": "Great Basin Gas Transmission Company",
      "stakeholderGroup": "Pipeline",
      "votingMember": "Rusty McLaughlin",
      "website": "https://www.greatbasingtc.com/",
      "type": "stakeholder"
    },
    {
      "company": "HF Sinclair",
      "stakeholderGroup": "Pipeline",
      "votingMember": "Mark Largesse",
      "website": "https://www.hfsinclair.com/home/default.aspx",
      "type": "stakeholder"
    },
    {
      "company": "Hole Hogz",
      "stakeholderGroup": "Excavator",
      "votingMember": "Robert McKechnie",
      "website": "https://www.holehogz.com/Hydro-Excavation/1",
      "type": "stakeholder"
    },
    {
      "company": "JABCO. UN, Inc.",
      "stakeholderGroup": "Excavator",
      "votingMember": "Ines Esquivel",
      "website": null,
      "type": "stakeholder"
    },
    {
      "company": "JBM Underground",
      "stakeholderGroup": "Excavator",
      "votingMember": "Mat Whalen",
      "website": "https://jbmunderground.com/",
      "type": "stakeholder"
    },
    {
      "company": "KCI Technologies, Inc.",
      "stakeholderGroup": "Design Engineering",
      "votingMember": "Rick Torrens",
      "website": "http://www.kci.com/",
      "type": "stakeholder"
    },
    {
      "company": "Kern River Gas Transmission",
      "stakeholderGroup": "Pipeline",
      "votingMember": "Jeremy Crawford",
      "website": "https://www.kernrivergas.com/",
      "type": "stakeholder"
    },
    {
      "company": "Las Vegas Paving",
      "stakeholderGroup": "Road Builder",
      "votingMember": "Scott Allen",
      "website": "https://lasvegaspaving.com/",
      "type": "stakeholder"
    },
    {
      "company": "Las Vegas Valley Water District",
      "stakeholderGroup": "Water",
      "votingMember": "Mike Austin",
      "website": "https://www.lvvwd.com",
      "type": "stakeholder"
    },
    {
      "company": "Lumen",
      "stakeholderGroup": "Telecommunications",
      "votingMember": "Alonzo Trujillo",
      "website": null,
      "type": "stakeholder"
    },
    {
      "company": "Mammoth Underground",
      "stakeholderGroup": "Excavator",
      "votingMember": "Kathy Bergman",
      "website": null,
      "type": "stakeholder"
    },
    {
      "company": "Menichino Construction",
      "stakeholderGroup": "Excavator",
      "votingMember": "Vince Menichino",
      "website": "https://menichinoconstruction.com/",
      "type": "stakeholder"
    },
    {
      "company": "NPL Construction Co.",
      "stakeholderGroup": "Excavator",
      "votingMember": "Sean Murphy",
      "website": "https://gonpl.com/",
      "type": "stakeholder"
    },
    {
      "company": "New-Com",
      "stakeholderGroup": "Excavator",
      "votingMember": "Mario Guzman",
      "website": "https://nclasvegas.com/",
      "type": "stakeholder"
    },
    {
      "company": "NV Energy",
      "stakeholderGroup": "Electricity",
      "votingMember": "Kristen Garcia",
      "website": "http://www.nvenergy.com",
      "type": "stakeholder"
    },
    {
      "company": "PelicanCorp",
      "stakeholderGroup": "One-Call",
      "votingMember": "Siddarth Munivelu",
      "website": "https://pelicancorp.com/us/home",
      "type": "stakeholder"
    },
    {
      "company": "Prospector Pipeline Company",
      "stakeholderGroup": "Pipeline",
      "votingMember": "Danielle Keelan",
      "website": null,
      "type": "stakeholder"
    },
    {
      "company": "Public Utilities Commission of Nevada",
      "stakeholderGroup": "Regulator",
      "votingMember": "Dennis Bott",
      "website": "http://www.puc.nv.gov",
      "type": "stakeholder"
    },
    {
      "company": "Q&D Construction",
      "stakeholderGroup": "Road Builder",
      "votingMember": "Roy Halliburton",
      "website": "https://qdconstruction.com/",
      "type": "stakeholder"
    },
    {
      "company": "RP Weddell & Sons",
      "stakeholderGroup": "Excavator",
      "votingMember": "Cesar Castillo",
      "website": "https://g.co/kgs/85FvUQF",
      "type": "stakeholder"
    },
    {
      "company": "Southwest Gas",
      "stakeholderGroup": "Natural Gas",
      "votingMember": "Lynsay Demko",
      "website": "https://www.swgas.com/",
      "type": "stakeholder"
    },
    {
      "company": "Stake Center Locating",
      "stakeholderGroup": "Locator",
      "votingMember": "Tom Fava",
      "website": "https://www.stakecenter.com/",
      "type": "stakeholder"
    },
    {
      "company": "Team Fishel",
      "stakeholderGroup": "Excavator",
      "votingMember": "Marty Byars",
      "website": "https://www.teamfishel.com/",
      "type": "stakeholder"
    },
    {
      "company": "Terra Contracting",
      "stakeholderGroup": "Excavator",
      "votingMember": "Paul Gibson",
      "website": "https://terracontracting.com/",
      "type": "stakeholder"
    },
    {
      "company": "Tilson Tech",
      "stakeholderGroup": "Excavator",
      "votingMember": "Brendan Vargas",
      "website": "https://tilsontech.com/",
      "type": "stakeholder"
    },
    {
      "company": "Truckee Meadows Water Authority",
      "stakeholderGroup": "Water",
      "votingMember": "Charles Atkinson",
      "website": "https://tmwa.com/",
      "type": "stakeholder"
    },
    {
      "company": "USA North 811",
      "stakeholderGroup": "One-Call",
      "votingMember": "Ryan White",
      "website": "http://usanorth811.org/",
      "type": "stakeholder"
    },
    {
      "company": "USIC",
      "stakeholderGroup": "Locator",
      "votingMember": "Mike Marrero",
      "website": "https://www.usicllc.com/",
      "type": "stakeholder"
    },
    {
      "company": "VCI Construction",
      "stakeholderGroup": "Excavator",
      "votingMember": "Rob Espinosa",
      "website": "https://vcicom.com/",
      "type": "stakeholder"
    },
    {
      "company": "Western States Contracting",
      "stakeholderGroup": "Excavator",
      "votingMember": "Harold Lefler",
      "website": "http://www.westernstatesco.com/",
      "type": "stakeholder"
    },
    {
      "company": "Xram Excavation",
      "stakeholderGroup": "Excavator",
      "votingMember": "Scotty Marx",
      "website": "https://g.co/kgs/QqEWCLq",
      "type": "stakeholder"
    }
  ],
  "associateMembers": [
    {
      "company": "811 Spotter",
      "type": "associate"
    },
    {
      "company": "Arizona Pipeline Company",
      "type": "associate"
    },
    {
      "company": "DigContrax",
      "type": "associate"
    },
    {
      "company": "Flippin's Trenching",
      "type": "associate"
    },
    {
      "company": "Haaker Equipment Company",
      "type": "associate"
    },
    {
      "company": "National Trench Safety",
      "type": "associate"
    },
    {
      "company": "NEPTCO MULETAPE",
      "type": "associate"
    },
    {
      "company": "Norfield DP",
      "type": "associate"
    },
    {
      "company": "Silver Lake Construction",
      "type": "associate"
    },
    {
      "company": "Sub-T & Locating Dynamics",
      "type": "associate"
    },
    {
      "company": "Tecsolutions Consultants",
      "type": "associate"
    }
  ]
};

// Load members data (now just renders immediately)
function loadMembersData() {
    renderMembers();
}

// Render stakeholder members
function renderStakeholderMembers() {
    const grid = document.getElementById('stakeholder-members-grid');
    if (!grid || !membersData) return;

    grid.innerHTML = '';

    membersData.stakeholderMembers.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = 'member-item';
        memberItem.setAttribute('data-member-id', member.company);
        memberItem.setAttribute('data-member-type', 'stakeholder');
        
        memberItem.innerHTML = `
            <h4>${member.company}</h4>
            <p class="member-category">${member.stakeholderGroup}</p>
            <p class="member-contact">${member.votingMember}</p>
        `;

        memberItem.addEventListener('click', () => showMemberModal(member));
        grid.appendChild(memberItem);
    });
}

// Render associate members
function renderAssociateMembers() {
    const grid = document.getElementById('associate-members-grid');
    if (!grid || !membersData) return;

    grid.innerHTML = '';

    membersData.associateMembers.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.className = 'associate-item';
        memberItem.setAttribute('data-member-id', member.company);
        memberItem.setAttribute('data-member-type', 'associate');
        memberItem.textContent = member.company;

        memberItem.addEventListener('click', () => showMemberModal(member));
        grid.appendChild(memberItem);
    });
}

// Render all members
function renderMembers() {
    renderStakeholderMembers();
    renderAssociateMembers();
}

// Show member modal with details
function showMemberModal(member) {
    const modal = document.getElementById('member-modal');
    const companyName = document.getElementById('modal-company-name');
    const category = document.getElementById('modal-category');
    const votingMember = document.getElementById('modal-voting-member');
    const votingMemberValue = document.getElementById('modal-voting-member-value');
    const stakeholderGroup = document.getElementById('modal-stakeholder-group');
    const stakeholderGroupValue = document.getElementById('modal-stakeholder-group-value');
    const website = document.getElementById('modal-website');
    const websiteLink = document.getElementById('modal-website-link');

    // Set company name
    companyName.textContent = member.company;

    // Set category
    if (member.type === 'stakeholder' && member.stakeholderGroup) {
        category.textContent = member.stakeholderGroup;
        category.style.display = 'inline-block';
    } else if (member.type === 'associate') {
        category.textContent = 'Associate Member';
        category.style.display = 'inline-block';
    } else {
        category.style.display = 'none';
    }

    // Set voting member (only for stakeholders)
    if (member.type === 'stakeholder' && member.votingMember) {
        votingMemberValue.textContent = member.votingMember;
        votingMember.style.display = 'flex';
    } else {
        votingMember.style.display = 'none';
    }

    // Set stakeholder group (only for stakeholders)
    if (member.type === 'stakeholder' && member.stakeholderGroup) {
        stakeholderGroupValue.textContent = member.stakeholderGroup;
        stakeholderGroup.style.display = 'flex';
    } else {
        stakeholderGroup.style.display = 'none';
    }

    // Set website link
    if (member.website) {
        websiteLink.href = member.website;
        websiteLink.textContent = `Visit ${member.company} Website →`;
        website.style.display = 'block';
    } else {
        website.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close member modal
function closeMemberModal() {
    const modal = document.getElementById('member-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize members page
function initializeMembersPage() {
    // Wait a bit for components to load first
    setTimeout(() => {
        // Load members data
        loadMembersData();

        // Close modal handlers
        const closeButton = document.getElementById('member-modal-close');
        const modal = document.getElementById('member-modal');

        if (closeButton) {
            closeButton.addEventListener('click', closeMemberModal);
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeMemberModal();
                }
            });
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMemberModal();
            }
        });
    }, 100);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMembersPage);
} else {
    // DOM is already ready
    initializeMembersPage();
}

