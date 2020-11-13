import {createHeader} from "./src/components/header";
import {gradeAndStatusOfEstudants} from './src/components/averageCalculator';
import {createTable}  from './src/components/table';
import './src/css/style.css'

createHeader ("#252525");

createTable (gradeAndStatusOfEstudants);


