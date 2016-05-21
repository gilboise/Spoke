import { Meteor } from 'meteor/meteor'
import { Campaigns } from '../../api/campaigns/campaigns.js'
import { createContainer } from 'meteor/react-meteor-data'
import { CampaignsPage } from '../pages/campaigns_page'


export default createContainer(({organizationId}) => {
  const handle = Meteor.subscribe('campaigns', organizationId)

  return {
    organizationId,
    campaigns: Campaigns.find({}).fetch(),
    loading: !handle.ready()
  }
}, CampaignsPage)