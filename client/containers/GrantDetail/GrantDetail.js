import React, { Component} from 'react';
import styles from './GrantDetail.scss';
import cx from 'classnames';

const grant = [{
  title:'SFI Fellowship Program' ,
  desc:'Science Foundation Ireland is keen to be part of a framework that can enable researchers to seek and secure diverse career opportunities in areas such as industry, research funding and administration, public administration and Government affairs. For those individuals interested in these types of careers, the Fellowship Programme will provide an opportunity to develop key skills which may assist them in securing these types of roles.  For research office staff, Science Foundation Ireland offers the opportunity for Research Bodies to learn more about the administration of research funding.',
  duration:'3 years',
  contact:'Fellowship@sfi.ie',
},
{
  title:'Brussels Conference Program' ,
  desc:'SFI’s Brussels Conference Programme provides support for the organisation of one-day events in Brussels, Belgium that help enable the creation of opportunities for Ireland and Irish researchers to influence EU policy, to help in the development of Horizon 2020 work programmes and to foster collaborations of strategic importance across the European Research Area (ERA). The Brussels Conference Programme focuses on funding the scientific aspect of the event (for example costs associated with invited speakers). For SFI to help support and realise such events it is crucial that all relevant stakeholders within the research community join forces to catalyse and stimulate the creation of ideas and solutions to bring to a European platform. It will be expected that submissions to this Call will be coordinated through the SFI-funded Research Centres but will involve a broad cohort from the wider research community, both from Ireland and abroad, to ensure that multiple offerings are covered. A robust promotional plan for the event at both national and European level will therefore need to be considered as part of any proposal. Applicants will also be expected to work closely with the Enterprise Ireland Brussels office in planning the logistics of holding such an event.',
  duration:'1 year',
  contact:'h2020@sfi.ie',
},
{
  title:'EPSRC-SFI Joint Funding of Research' ,
  desc:'The new partnership will support joint research and technology development in all areas of EPSRC’s remit which covers chemistry, engineering, information and communications technologies, materials, mathematical sciences and physics.Under the lead agency agreement, a single joint proposal from applicants in both countries is submitted to EPSRC. The application is processed according to the normal procedures of EPSRC Standard Grants. Successful UK-based research groups will be funded by EPSRC and Republic of Ireland (ROI)-based research groups will be funded by SFI.Joint applications to this programme will be accepted at any time. Joint applications should follow standard EPSRC format, but applicants should review the following guidance documentation carefully for specific instructions regarding additional information and documentation that must be included',
  duration:'5 years',
  contact:'partnerships@sfi.ie',
},
{
  title:'SFI Research Centres - Spokes' ,
  desc:' This programme is a vehicle to enable the addition of new industrial and academic partners and projects to a SFI Research Centre, so allowing the Centre to expand and develop in line with new priorities and opportunities. This will ensure that the Research Centre retains its ability to do cutting edge research and its industrial relevance, and so enhance its sustainability. The Spokes programme also provides a vehicle to link together, in a meaningful and relevant way, different Research Centres. The Programme has been designed to deliver excellent basic, oriented research results and discoveries in targeted projects associated with SFI Research Centres and hence will deliver significant economic and societal impact during the lifetime of the programme.Like the SFI Research Centres, the SFI Spokes programme will help link scientists and engineers in partnerships across academia and industry to address crucial research questions, foster the development of new and existing Ireland-based technology companies, attract industry that could make an important contribution to Ireland and its economy, and expand educational and career opportunities in Ireland in science and engineering.',
  duration:'5 years',
  contact:'spokes@sfi.ie.',
},
{
  title:'SFI Research Professorship Programme' ,
  desc:'Since its launch in 2003, the SFI Research Professorship Programme has sought to support national strategic priorities by assisting research bodies in the recruitment of world-leading researchers for Professorial Chairs, or similar research leadership positions in targeted scientific areas. The programme has also acted as a mechanism to support the recruitment of individuals who possess a strong industry background and may also allow for the recruitment of those intending to hold senior roles in SFI Research Centres or other centres of scale. ',
  duration:'5 years',
  contact:'Fellowship@sfi.ie',
},
{
  title:'SFI Discover Programme - Opportunistic Funding Mechanism' ,
  desc:' The Science Foundation Ireland Discover Programme Call aims to support and develop science, technology, engineering and maths (STEM) education and public engagement sector in Ireland by:investing in, developing and extending activity and ability in this area, and exploring and encouraging novel means of engaging the public .The purpose of the Call is to support projects that encourage people of all ages and from all walks of life to be informed, inspired and involved in STEM.Applications must clearly outline how the project will address Science Foundation Ireland’s goal to have an engaged and scientifically informed public in Ireland.',
  duration:'1 year',
  contact:' discover.programme@sfi.ie ',
},

]


class GrantDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
  
    }
  }
  getDetail() {
    
    return grant.map((grant)=>{
      {grant}
    });
  }
	render() {
    const state = this.state;
    const props = this.props;

    
    const grant = 
    {
      title:'SFI Fellowship Program' ,
      desc:'Science Foundation Ireland is keen to be part of a framework that can enable researchers to seek and secure diverse career opportunities in areas such as industry, research funding and administration, public administration and Government affairs. For those individuals interested in these types of careers, the Fellowship Programme will provide an opportunity to develop key skills which may assist them in securing these types of roles.  For research office staff, Science Foundation Ireland offers the opportunity for Research Bodies to learn more about the administration of research funding.',
      duration:'3 years',
      contact:'Fellowship@sfi.ie'
    }
          
		return (
			<div>
				{/* 
          
        */}
        {/* Heading of Page */}
        <div className={styles.header}>
            <div className={styles.title}>Information about the grants</div>
          </div>

        <div className={styles.title}>
          {grant.title}
        </div>
        <div className={styles.description}>
          {grant.desc}
        </div>
        <div className={styles.description}>
          {grant.duration}
        </div>
        <div className={styles.description}>
          {grant.contact}
        </div>
        <div>
          {/* Add in data like so. e.g for a user: add in their name with {user.name} into a div */}
        </div>
       
			</div>
		)
;	}
}

export default GrantDetail;