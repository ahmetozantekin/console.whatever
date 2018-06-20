let mocha = require('mocha')
let describe = mocha.describe;
var assert = require('assert');
var chai = require('chai');  
var assert = chai.assert;  
var expect = chai.expect;  
var should = chai.should();
var console = require('../console.whatever');

describe('Types', function() {
    describe('# should', function() {
      it('console.lgo("lgo", "2") should be a string value', function() {
        var t = (typeof console.lgo("lgo", "2"));
        t.should.be.a('string');
      });
      it('console.olg("olg", "2") should be a string value', function() {
        var t = (typeof  console.olg("olg", "2"));
        t.should.be.a('string');
      });
      it('console.glo("glo", "2") should be a string value', function() {
        var t = (typeof console.glo("glo", "2"));
        t.should.be.a('string');
      });
      it('console.ogl("ogl", "2") should be a string value', function() {
        var t = (typeof console.ogl("ogl", "2"));
        t.should.be.a('string');
      });
      it('console.olg("olg", "2") should be a string value', function() {
        var t = (typeof console.olg("olg", "2"));
        t.should.be.a('string');
      });
      it('console.lg("lg", "2") should be a string value', function() {
        var t = (typeof console.lg("lg", "2"));
        t.should.be.a('string');
      });
      it('console.lo("lo", "2") should be a string value', function() {
        var t = (typeof console.lo("lo", "2"));
        t.should.be.a('string');
      });
      it('console.lgo(2+3 + "a") should be a string value', function() {
        var t = (typeof console.lgo(2+3 + "a") );
        t.should.be.a('string');
      });
      it('console.olg(2+3 + "a") should be a string value', function() {
        var t = (typeof console.olg(2+3 + "a") );
        t.should.be.a('string');
      });
      it('console.lg("a" + 2+3 + "a") should be a string value', function() {
        var t = (typeof console.lg("a"+ 2+3 + "a") );
        t.should.be.a('string');
      });
    });
  });
