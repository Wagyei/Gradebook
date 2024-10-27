import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DropDownButton from '../buttons/dropDownButton';
import { useEffect, useState } from 'react';
import TaskSetModal from './taskSetModal';
import EditableTableCell from './editableTableCell';
import ContinuousAssessmentConfigurationForm from './configurationForm';
import SimpleTabs from './tabs';
import AssessmentForm from './assessmentForm';
import FileGrid from './fileGrid';


const assessments = {
  'assessmentid1': {
    'data': {

      'student_id1': {
        "exerciseAssignments": [
          { "name": "String", "score": "Number" }
        ],
        "classTests": [
          { "name": "String", "score": "Number" }
        ],
        "homeworks": [
          { "name": "String", "score": "Number" }
        ],
        "subTotalExercise": "Number",
        "subTotalClassTest": "Number",
        "subTotalHomework": "Number",
        "totalClassScore": "Number",
        "termExam": "Number",
        "overallTotal": "Number",
        "position": "Number",
        'name': 'Name 2',
        'image': `${process.env.PUBLIC_URL}/logo192.png`,
      },
      'student_id2': {
        "exerciseAssignments": [
          { "name": "String", "score": "Number" }
        ],
        "classTests": [
          { "name": "String", "score": "Number" }
        ],
        "homeworks": [
          { "name": "String", "score": "Number" }
        ],
        "subTotalExercise": "Number",
        "subTotalClassTest": "Number",
        "subTotalHomework": "Number",
        "totalClassScore": "Number",
        "termExam": "Number",
        "overallTotal": "Number",
        "position": "Number",
      }
    },
    'name': 'Name 1',
    'subject_id': 2,
    'type': 'CNA',
    'image': `${process.env.PUBLIC_URL}/logo192.png`,


  },
  'assessmentid2': {
    'data': {

      'student_id1': {
        "exerciseAssignments": [
          { "name": "String", "score": "Number" }
        ],
        "classTests": [
          { "name": "String", "score": "Number" }
        ],
        "homeworks": [
          { "name": "String", "score": "Number" }
        ],
        "subTotalExercise": "Number",
        "subTotalClassTest": "Number",
        "subTotalHomework": "Number",
        "totalClassScore": "Number",
        "termExam": "Number1",
        "overallTotal": "Number",
        "position": "Number2",
        'name': 'Name 2',
        'image': `${process.env.PUBLIC_URL}/logo192.png`,
      },
      'student_id2': {
        "exerciseAssignments": [
          { "name": "String", "score": "Number" }
        ],
        "classTests": [
          { "name": "String", "score": "Number" }
        ],
        "homeworks": [
          { "name": "String", "score": "Number" }
        ],
        "subTotalExercise": "Number",
        "subTotalClassTest": "Number",
        "subTotalHomework": "Number",
        "totalClassScore": "Number",
        "termExam": "Number3",
        "overallTotal": "Number",
        "position": "Number4",
      }
    },
    'name': 'Name 2',
    'subject_id': 2,
    'type': 'CNA',
    'image': `${process.env.PUBLIC_URL}/logo192.png`,


  }
};

export default function ContinuousAssessment() {
  // const [my_api_data, set_my_api_data] = useState(api_data)
  // const [openModal, setOpenModal] = useState(false)
  const [tabs, setTabs] = useState([{ label: 'Assessment Configuration', component: <ContinuousAssessmentConfigurationForm></ContinuousAssessmentConfigurationForm> },
  { label: 'Assessment', component: <AssessmentForm assessment={assessments['assessmentid2']}></AssessmentForm> },

  ])

  return (
    <div>
      <div><SimpleTabs tabs={tabs}></SimpleTabs></div>
      {/* <div><FileGrid files={assessments}></FileGrid></div> */}
      {/* <div>
        <TaskSetModal open={openModal} setOpen={setOpenModal} set_my_api_data={set_my_api_data} my_api_data={my_api_data}></TaskSetModal>
      </div>
      <div>
        <DropDownButton my_api_data={my_api_data} set_my_api_data={set_my_api_data} setOpenModal={setOpenModal}></DropDownButton>
      </div> */}
    </div>

  );

}
