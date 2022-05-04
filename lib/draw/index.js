import BaseDrawModule from 'bpmn-js/lib/draw';
import CommitmentChoreoRenderer from './CommitmentChoreoRenderer';

export default {
  __init__: [
    'commitmentChoreoRenderer'
  ],
  __depends__: [
    BaseDrawModule
  ],
  commitmentChoreoRenderer: [ 'type', CommitmentChoreoRenderer ]
};
