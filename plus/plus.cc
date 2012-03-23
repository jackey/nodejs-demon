#define BUILDING_NODE_EXTENSION
#include <node.h>

using namespace v8;

Handle<Value> Plus(const Arguments &args) {
 HandleScope scope;
 if (args.Length() < 2)  {
  ThrowException(Exception::TypeError(String::New("Wrong number of arguments")));
  return scope.Close(Undefined());
 }
 Local<Number> num = Number::New(args[0]->NumberValue() + 
     args[1]->NumberValue());
  return scope.Close(num);
}

void init(Handle<Object> target) {
 target->Set(String::NewSymbol("plus"), 
     FunctionTemplate::New(Plus)->GetFunction());
}

NODE_MODULE(plus, init)