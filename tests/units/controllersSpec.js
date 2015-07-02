describe('Testing testAppCtrl', function(){
  alert('Testing first describe.');

  var x = 0;

  beforeEach(module('testApp'));
  beforeEach(function(){
      // Этот this объект будет виден во всех it(), afterEach() и beforeEach()
      this.descriptionForNextSpecFunction = 'to be good!';
      alert("x=" + x++);
  });

  ///////////////////////////////////////

  it('First Spec', inject(function($controller) {
    var scope = {},
        ctrl = $controller('testAppCtrl', {$scope:scope});

    expect(scope.arr.length).toBe(4);

  }));

  ///////////////////////////////////////

  it('Second spec', inject(function($controller){
    var scope = {},
        ctrl = $controller('testAppCtrl', {$scope:scope});

    expect(scope.value1).toBe(10);
    expect(this.descriptionForNextSpecFunction).toBe('to be good!');
  }));

  ///////////////////////////////////////

  it('Third spec', inject(function($controller){
    var scope = {},
        ctrl = $controller('testAppCtrl', {$scope:scope});

    expect(scope.value1).toBe(10);
    expect(this.descriptionForNextSpecFunction).toBe('to be good!');
  }));

  ///////////////////////////////////////

  it('Fourth spec', inject(function($controller){
    var scope = {},
        ctrl = $controller('testAppCtrl', {$scope:scope});

    expect(scope.value1).toBe(10);
    expect(this.descriptionForNextSpecFunction).toBe('to be good!');
  }));


    // Вложенный describe - при этом все операции beforeEach, afterEach наследуются.
    describe('Testing testAppCtrl', function(){

      alert('Testing second describe.');

      var y = 0;

      beforeEach(module('testApp'));
      beforeEach(function(){
          // Этот this объект будет виден во всех it(), afterEach() и beforeEach()
          this.descriptionForNextSpecFunction = 'to be good!';
          alert("y=" + y++);
      });

      ///////////////////////////////////////

      it('First Spec', inject(function($controller) {
        var scope = {},
            ctrl = $controller('testAppCtrl', {$scope:scope});

        expect(scope.arr.length).toBe(4);

      }));

      ///////////////////////////////////////

      it('Second spec', inject(function($controller){
        var scope = {},
            ctrl = $controller('testAppCtrl', {$scope:scope});

        expect(scope.value1).toBe(10);
        expect(this.descriptionForNextSpecFunction).toBe('to be good!');
      }));

      ///////////////////////////////////////

      it('Third spec', inject(function($controller){
        var scope = {},
            ctrl = $controller('testAppCtrl', {$scope:scope});

        expect(scope.value1).toBe(10);
        expect(this.descriptionForNextSpecFunction).toBe('to be good!');
      }));

      ///////////////////////////////////////

      it('Fourth spec', inject(function($controller){
        var scope = {},
            ctrl = $controller('testAppCtrl', {$scope:scope});

        expect(scope.value1).toBe(10);
        expect(this.descriptionForNextSpecFunction).toBe('to be good!');
      }));

      ///////////// Своего рода комментарии, только специфичные для тестового процесса (префикс x) //////////////////////////

      xit('Sixth spec', inject(function($controller){
        var scope = {},
            ctrl = $controller('testAppCtrl', {$scope:scope});

        expect(scope.value1).toBe(10);
        expect(this.descriptionForNextSpecFunction).toBe('to be good!');

        pending('Thats why its pending.');
      }));

    });
});


//////////////////////////////////////////////////////////////////////
////SPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPY/////////
//////////////////////////////////////////////////////////////////////
/////////////// Смотрим как работет перерхватчик spy /////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

describe('Testing Spy functions', function(){
  var foo;

  beforeEach(function(){
    foo = function(){
      var value = null;

      return {
        setValue : function(val){
          value = val;
        },
        getValue : function(){
          return value;
        }
      }
    }();

    // Ставим шпиона
    spyOn(foo, "setValue");

    foo.setValue('123');
    foo.setValue('12345');
  });

  it('doing simple call expectation', function(){
    expect(foo.setValue).toHaveBeenCalled();
  });

  it('doing 123', function(){
    expect(foo.setValue).toHaveBeenCalledWith('123');
  });

  it('doing 12345', function(){
    expect(foo.setValue).toHaveBeenCalledWith('12345');
  });
});

//////////////////////////////////////////////////////////////////////
////SPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPYSPY/////////
//////////////////////////////////////////////////////////////////////
/////////////// Смотрим как работет перерхватчик spy /////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

describe('Testing Spy: callThrough', function(){
  var foo, fetched;

  beforeEach(function(){
    foo = function(){
      var value = null;

      return {
        setValue : function(val){
          value = val;
        },
        getValue : function(){
          alert('getValue called');
          return value;
        },
        // функция для шпиона после которого замещается возвращаемое значение
        substituteValue : function(){
          return 11;
        },
        fakeValue : function(){
          return 123;
        }
      }
    }();

    // Ставим шпиона
    spyOn(foo, "getValue").and.callThrough();

    // Реализуем substitute функционал
    spyOn(foo, "substituteValue").and.returnValue(12);

    // Реализуем fake
    spyOn(foo, "fakeValue").and.callFake(function(){
      return 444;
    });

    foo.setValue('123');

    fetched = foo.getValue();
  });

  it('doing simple call expectation', function(){
    expect(foo.getValue).toHaveBeenCalled();
  });

  it('doing 123', function(){
    expect(foo.getValue()).toEqual('123');
  });

  it('doing substitution', function(){
    expect(foo.substituteValue()).toEqual(12);
  });

  it('doing fake', function(){
    expect(foo.fakeValue()).toEqual(444);
  });
});



