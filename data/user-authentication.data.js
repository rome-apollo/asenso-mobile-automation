
import { severity, features, project, testCase} from "./constants.data.js"

export const metadata = {
    UA_001: {
        testID: 'UA_001',
        description: testCase.description.userAuthentication.UA_001,
        owner: project.owner,
        tags: [project.name, features.userAuthentication, `Sprint ${project.currentSprint}`],
        severity: severity.blocker,
        opProject: project.product[0],
        opTicketID: '00000',
    },
}

export const behaviorsData = {
    epic: project.name,
    features: `Sprint ${project.currentSprint}`,
    story: features.userAuthentication
}