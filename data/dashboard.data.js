
import { severity, features, project, testCase} from "./constants.data.js"

export const metadata = {
    DS_001: {
        testID: 'DS_001',
        description: testCase.description.dashboard.DS_001,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    DS_002: {
        testID: 'DS_002',
        description: testCase.description.dashboard.DS_002,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    DS_003: {
        testID: 'DS_003',
        description: testCase.description.dashboard.DS_003,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    DS_004: {
        testID: 'DS_004',
        description: testCase.description.dashboard.DS_004,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
   },
    DS_005: {
        testID: 'DS_005',
        description: testCase.description.dashboard.DS_005,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
   },
    DS_006: {
        testID: 'DS_006',
        description: testCase.description.dashboard.DS_006,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
    },
    DS_007: {
        testID: 'DS_007',
        description: testCase.description.dashboard.DS_007,
        owner: project.owner,
        tags: [project.name, features.dashboard, `Sprint ${project.currentSprint}`],
        severity: severity.normal,
        opProject: project.product[0],
        opTicketID: '00000',
    },

}

export const behaviorsData = {
    epic: project.name,
    features: `Sprint ${project.currentSprint}`,
    story: features.dashboard
}