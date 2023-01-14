import java.util.function.*;

class Closure {

    public static void main(String[] args)  {
        Function<Double,Function<Double,Double>> createLog = (Double base) -> (Double n) -> log(base, n);
        Function<Double,Double> lg = createLog.apply(10d);
        Function<Double,Double> ln = createLog.apply(Math.E);
        //usage
        System.out.println(lg.apply(1000d));
        System.out.println(ln.apply(Math.E * Math.E));
    }

    private static Double log(Double base, Double n)
    {
        return Math.log(n)/ Math.log(base);
    }

}
