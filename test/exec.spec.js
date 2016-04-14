import exec from '../tools/parser/exec';
import chai from 'chai';
const expect = chai.expect;

describe('exec: run shell command', () => {

  it('should be a function', () => {
    expect(exec).to.be.a('function');
  });

  it('should return a Promise', () => {
    expect(exec().then).to.be.a('function');
    expect(exec().catch).to.be.a('function');
  });

  it('should be called with one argument of type string');
  it('should throw an error if called without an argument');

  it('should throw an error if the command is not valid', (done)=>{
    exec('npm hep').catch((err)=>{
      expect(err).equal('error');
      done();
    });
  });

  it('should log data from the process to stdout', (done)=>{
    exec('npm help').then((data)=>{
      expect(data).to.be.defined;
      done();
    });
  });
});
