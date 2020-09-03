export type ScheduleItem = {
  school: string,
  grade: number,
  type: string,
  teacherCode: string,
  bilingual: boolean,
  roomNumber: string,
  roomSequence: number,
  classType: string,
  sequenceNumber: number,
  startTime: number, // TODO create a better type?
  endTime: number,
  subject: string,
  color: string,
  classBlockNumber: number,
  minutes: number
}

export type StudentRx = {

}

export type SchedulerConfiguration = {
  constraints : ScheduleConstraint[],
  configurations: ScheduleConfiguration[]
}

export type ScheduleConstraint = {
  id : string
}

export type ScheduleConfiguration = {
  id : string,
  min : number,
  max : number
}
export type ServiceAssignment = {
   serviceDetail: ServicePrescription,
    serviceSlot: ServiceSlot
}

export type ServicePrescription = {
  student: number, serviceType: string, supportMethod: string, minutes: number
}

export type ServiceSlot = {
  startTime: number, endTime: number, classroom: number
}
