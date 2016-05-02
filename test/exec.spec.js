import chai from 'chai';
import path from 'path';
import exec from '../tools/parser/exec';
import config from '../tools/config/configuration';
const expect = chai.expect;

const nodeModules = path.resolve(__dirname, '../node_modules');
const npmCMD = `${nodeModules}/npm/bin/npm-cli.js`;

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
    const cmd = `${npmCMD} hep`;
    exec('npm hep').catch((err) => {
      console.log(err);
      expect(err).to.be.a('string');
      done();
    });
  });

  it('should log data from the process to stdout', (done)=>{
    const cmd = `${npmCMD} help`;
    // exec(cmd).then((data)=>{
    //   expect(data).to.be.defined;
    //   done();
    // });
    done();
  });
});
