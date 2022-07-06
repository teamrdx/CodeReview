topSuite("Ext.chart.series.Bar", ['Ext.chart.*', 'Ext.data.ArrayStore'], function() {
    describe("x axis range", function() {
        var chart, layoutDone;

        afterEach(function() {
            chart = Ext.destroy(chart);
            layoutDone = false;
        });

        it("should be expanded on both sides by half bar width in case of two bars", function() {
            runs(function() {
                chart = Ext.create({
                    xtype: 'cartesian',
                    renderTo: document.body,
                    width: 300,
                    height: 200,
                    store: {
                        data: [{
                            name: 'one',
                            value: 1
                        }, {
                            name: 'two',
                            value: 2
                        }]
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left'
                    }, {
                        type: 'category',
                        position: 'bottom'
                    }],
                    series: {
                        type: 'bar',
                        xField: 'name',
                        yField: 'value'
                    },
                    listeners: {
                        layout: function() {
                            layoutDone = true;
                        }
                    }
                });
            });

            waitsFor(function() {
                return layoutDone;
            });

            runs(function() {
                var range = chart.getAxes()[1].getRange();

                // Original range of [0, 1] is expanded to fit the left side
                // of the left bar and the right side of the right bar.
                expect(range[0]).toBe(-0.5);
                expect(range[1]).toBe(1.5);
            });
        });

        it("should be expanded on both sides by half bar width in case of multiple bars", function() {
            runs(function() {
                chart = Ext.create({
                    xtype: 'cartesian',
                    renderTo: document.body,
                    width: 300,
                    height: 200,
                    store: {
                        data: [{
                            name: 'one',
                            value: 1
                        }, {
                            name: 'two',
                            value: 2
                        }, {
                            name: 'three',
                            value: 3
                        }]
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left'
                    }, {
                        type: 'category',
                        position: 'bottom'
                    }],
                    series: {
                        type: 'bar',
                        xField: 'name',
                        yField: 'value'
                    },
                    listeners: {
                        layout: function() {
                            layoutDone = true;
                        }
                    }
                });
            });

            waitsFor(function() {
                return layoutDone;
            });

            runs(function() {
                var range = chart.getAxes()[1].getRange();

                // Original range of [0, 1] is expanded to fit the left side
                // of the left bar and the right side of the right bar.
                expect(range[0]).toBe(-0.5);
                expect(range[1]).toBe(2.5);
            });
        });

        it("should not be expanded in case of a single bar", function() {
            runs(function() {
                chart = Ext.create({
                    xtype: 'cartesian',
                    renderTo: document.body,
                    width: 300,
                    height: 200,
                    store: {
                        data: [{
                            name: 'one',
                            value: 1
                        }]
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left'
                    }, {
                        type: 'category',
                        position: 'bottom'
                    }],
                    series: {
                        type: 'bar',
                        xField: 'name',
                        yField: 'value'
                    },
                    listeners: {
                        layout: function() {
                            layoutDone = true;
                        }
                    }
                });
            });

            waitsFor(function() {
                return layoutDone;
            });

            runs(function() {
                var range = chart.getAxes()[1].getRange();

                // Original range of [0, 1] is expanded to fit the left side
                // of the left bar and the right side of the right bar.
                expect(range[0]).toBe(-0.5);
                expect(range[1]).toBe(0.5);
            });
        });
    });

    describe("tooltip with innerpadding", function() {
        var chart, layoutDone;

        afterEach(function() {
            chart = Ext.destroy(chart);
            layoutDone = false;
        });

        it("should be expanded on both sides by half bar width in case of two bars", function() {
            var spy = jasmine.createSpy(),
                tooltip;

            runs(function() {
                chart = Ext.create({
                    xtype: 'cartesian',
                    renderTo: document.body,
                    width: 300,
                    height: 200,
                    innerPadding: {
                        top: 40,
                        left: 10,
                        right: 10,
                        bottom: 0
                    },
                    insetPadding: '50 10',
                    store: {
                        data: [{
                            name: 'one',
                            value: 1
                        }, {
                            name: 'two',
                            value: 2
                        }]
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left'
                    }, {
                        type: 'category',
                        position: 'bottom'
                    }],
                    series: {
                        type: 'bar',
                        xField: 'name',
                        yField: 'value',
                        tooltip: {
                            renderer: function(toolTip, record, ctx) {
                                toolTip.setHtml("This is a tool tip>> " + record.get('name') + " " + record.get('value'));
                            }
                        }
                    },
                    listeners: {
                        layout: function() {
                            layoutDone = true;
                        }
                    }
                });

               tooltip = chart.getSeries()[0].getTooltip();
            });

            waitsFor(function() {
                return layoutDone;
            });
            runs(function() {
                jasmine.fireMouseEvent(chart, 'mousemove', 268, 118);
                expect(tooltip.isVisible()).toBe(true);
                tooltip.on('hide', spy);
            });

            // wait for tooltip to get hidden.
            waitForSpy(spy, 10000);

            runs(function() {
                // Added inner padding to x-axis, the tooltip should be hidden.
                jasmine.fireMouseEvent(chart, 'mousemove', 278, 114);
                expect(tooltip.isVisible()).toBe(false);
            });
        });
    });
});
