// stdDev calculator https://www.calculator.net/standard-deviation-calculator.html
topSuite("Ext.data.summary.StdDev", ['Ext.data.Model', 'Ext.Number'], function() {
    var aggregator;

    beforeEach(function() {
        aggregator = new Ext.data.summary.StdDev();
    });

    afterEach(function() {
        aggregator = null;
    });

    function makeSuite(withRecords) {
        var data, M;

        function run(property, begin, end) {
            var ret;

            property = property || 'p1';
            begin = begin || 0;
            end = end || data.length;

            if (data.length) {
                if (typeof data[0] === 'number') {
                    data = Ext.Array.map(data, function(n) {
                        var o = {};

                        o[property] = n;

                        return o;
                    });
                }
            }

            if (withRecords) {
                data = Ext.Array.map(data, function(item) {
                    return new M(item);
                });
            }

            ret = aggregator.calculate(data, property, withRecords ? 'data' : '', begin, end);

            if (ret != null) {
                ret = parseFloat(Ext.Number.toFixed(ret, 2));
            }

            return ret;
        }

        if (withRecords) {
            M = Ext.define(null, {
                extend: 'Ext.data.Model',
                fields: ['p1', 'p2']
            });
        }

        function fixNumber(value) {
            return parseFloat(Ext.Number.toFixed(value, 2));
        }

        afterEach(function() {
            data = null;
        });

        describe("value", function() {
            it("should return undefined when there are no items", function() {
                data = [];
                expect(run()).toBeUndefined();
            });

            it("should return the correct stdDev", function() {
                data = [10, 12, 23, 23, 16, 23, 21, 14];
                expect(run()).toBe(5.39);
            });

            it("should return the stdDev when there are duplicates", function() {
                data = [10, 12, 23, 23, 16, 23, 21, 14, 10, 12];
                expect(run()).toBe(5.56);
            });

            it("should return the stdDev correctly with negative numbers", function() {
                data = [-8, -11, -14, -4, -2, -17, -6, -9, -5, -12];
                expect(run()).toBe(4.73);
            });
        });

        describe("property", function() {
            beforeEach(function() {
                var set1 = [16, 7, 19, 2, 9, 10, 20, 5, 12, 1],
                    set2 = [6, 9, 19, 11, 13, 8, 1, 14, 5, 10];

                data = [];

                Ext.Array.forEach(set1, function(v, idx) {
                    data.push({
                        p1: v,
                        p2: set2[idx]
                    });
                });
            });

            it("should run on the correct property", function() {
                expect(run('p1')).toBe(6.67);
            });

            it("should run on another property", function() {
                expect(run('p2')).toBe(5.08);
            });
        });

        describe("begin/end", function() {
            it("should allow a begin after 0", function() {
                data = [8, 11, 14, 4, 2, 17, 6, 9, 5, 13];
                expect(run('p1', 4)).toBe(5.54);
            });

            it("should allow an end before the length", function() {
                data = [8, 11, 14, 4, 2, 17, 6, 9, 5, 13];
                expect(run('p1', 0, 6)).toBe(5.79);
            });

            it("should allow both together", function() {
                data = [8, 11, 14, 4, 2, 17, 6, 9, 5, 13];
                expect(run('p1', 2, 5)).toBe(6.43);
            });
        });
    }

    describe("with records", function() {
        makeSuite(true);
    });

    describe("with objects", function() {
        makeSuite(false);
    });
});
