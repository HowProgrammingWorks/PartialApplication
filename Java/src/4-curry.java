import java.util.function.Function;

class Curry {
    public static void main(String[] args) {
        final TriFunction<Integer,Integer,Integer,Integer> add = Curry::sum;
        Function<Integer, Function<Integer, Function<Integer,Integer>>> uncurry = Curry.curry(add);
        TriFunction<Integer,Integer,Integer,Integer> curry = Curry.uncurry(uncurry);
        //usage
        System.out.println("Curried result : " + curry.apply(1,2,3));
        System.out.println("Uncurried result : " + uncurry.apply(1).apply(2).apply(3));
    }
    private static Integer sum(Integer a, Integer b, Integer c){
        return a + b + c;
    }

    private static <A, B, C, D> Function<A, Function<B, Function<C,D>>> curry(final TriFunction<A, B, C, D> f) {
        return (A a) -> (B b) -> (C c) -> f.apply(a, b, c);
    }

    private static <A, B, C, D> TriFunction<A,B,C,D> uncurry(Function<A, Function<B, Function<C, D>>> f) {
        return (A a, B b, C c) -> f.apply(a).apply(b).apply(c);
    }

    @FunctionalInterface
    public interface TriFunction<A,B,C,D>{
        D apply(A a,B b,C c);
    }

}
