
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
    UA_002: {
        testID: 'UA_002',
        description: testCase.description.userAuthentication.UA_002,
        owner: project.owner,
        tags: [project.name, features.userAuthentication, `Sprint ${project.currentSprint}`],
        severity: severity.blocker,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    UA_004: {
        testID: 'UA_004',
        description: testCase.description.userAuthentication.UA_004,
        owner: project.owner,
        tags: [project.name, features.userAuthentication, `Sprint ${project.currentSprint}`],
        severity: severity.blocker,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    UA_005: {
        testID: 'UA_005',
        description: testCase.description.userAuthentication.UA_005,
        owner: project.owner,
        tags: [project.name, features.userAuthentication, `Sprint ${project.currentSprint}`],
        severity: severity.blocker,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    UA_006: {
        testID: 'UA_006',
        description: testCase.description.userAuthentication.UA_006,
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