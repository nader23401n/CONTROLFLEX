// -----------------------------------------------------------------jQuery-------------------------------------------------------------- :

    (function () { // slide
        let element = $('[aria-controls]');
        element.each(function (index, ele) {
            if (ele.getAttributeNode('data-slide') !== null) {
                let dependent = $(`#${ele.getAttribute('aria-controls')}`);
                if (dependent !== null) {
                    let DP = dependent.css('display');
                    if (ele.getAttribute('data-duration') !== null) {var slide_duration = ele.getAttribute('data-duration');}
                    if (dependent.attr('aria-expanded') === 'true') {
                        dependent.css('display', DP);
                    } else if (dependent.attr('aria-expanded') === 'false') {
                        dependent.css('display', 'none');
                        if (ele.getAttributeNode('data-media') !== null) {
                            if (ele.getAttributeNode('data-media').value === 'collapse') {
                                if (window.innerWidth <= 740) {$('.navbar-collapse').css('display', 'none');} else {$('.navbar-collapse').css('display', 'flex');}
                                $(window).resize(function () {
                                    if (window.innerWidth <= 740) {$('.navbar-collapse').css('display', 'none');} else {$('.navbar-collapse').css('display', 'flex');}
                                });
                            } else if (ele.getAttributeNode('data-media').value === 'true') {
                                if (ele.getAttributeNode('data-screen-size').value === 'xs') {
                                    if (window.innerWidth >= 380) {dependent.css('display', 'none');} else {
                                        if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                            if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            }
                                        } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                            if (ele.getAttributeNode('data-slide').value === 'up') {
                                                $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                            }
                                        }
                                    }
                                    $(window).resize(function () { 
                                        DP = dependent.css('display');
                                        if (window.innerWidth >= 380) {dependent.css('display', 'none');} else {
                                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                }
                                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                                }
                                            }
                                        }
                                    });   
                                } else if (ele.getAttributeNode('data-screen-size').value === 'sm') {
                                    if (window.innerWidth >= 560) {dependent.css('display', 'none');} else {
                                        if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                            if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            }
                                        } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                            if (ele.getAttributeNode('data-slide').value === 'up') {
                                                $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                            }
                                        }
                                    }

                                    $(window).resize(function () { 
                                        DP = dependent.css('display');
                                        if (window.innerWidth >= 560) {dependent.css('display', 'none');} else {
                                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                }
                                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                                }
                                            }
                                        }
                                    });
                                } else if (ele.getAttributeNode('data-screen-size').value === 'md') {
                                    if (window.innerWidth >= 740) {dependent.css('display', 'none');} else {
                                        if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                            if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            }
                                        } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                            if (ele.getAttributeNode('data-slide').value === 'up') {
                                                $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                            }
                                        }
                                    }

                                    $(window).resize(function () { 
                                        DP = dependent.css('display');
                                        if (window.innerWidth >= 740) {dependent.css('display', 'none');} else {
                                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                }
                                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                                }
                                            }
                                        }
                                    });
                                } else if (ele.getAttributeNode('data-screen-size').value === 'lg') {
                                    if (window.innerWidth >= 920) {dependent.css('display', 'none');} else {
                                        if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                            if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            }
                                        } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                            if (ele.getAttributeNode('data-slide').value === 'up') {
                                                $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                            }
                                        }
                                    }

                                    $(window).resize(function () { 
                                        DP = dependent.css('display');
                                        if (window.innerWidth >= 920) {dependent.css('display', 'none');} else {
                                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                }
                                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                                }
                                            }
                                        }
                                    });
                                } else if (ele.getAttributeNode('data-screen-size').value === 'xl') {
                                    if (window.innerWidth >= 1100) {dependent.css('display', 'none');} else {
                                        if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                            if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                            }
                                        } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                            if (ele.getAttributeNode('data-slide').value === 'up') {
                                                $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                            } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                            }
                                        }
                                    }

                                    $(window).resize(function () { 
                                        DP = dependent.css('display');
                                        if (window.innerWidth >= 1100) {dependent.css('display', 'none');} else {
                                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                                }
                                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                                }
                                            }
                                        }
                                    });
                                }
                            } else if (ele.getAttributeNode('data-media').value === 'false') {
                                if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                    if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                        ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                    } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                        ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                    } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                        ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                    }
                                } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                    if (ele.getAttributeNode('data-slide').value === 'up') {
                                        $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                    } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                        $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                    }
                                }
                            } 
                        } 

                        if(ele.getAttributeNode('data-media') === null || ele.getAttributeNode('data-media').value === 'collapse' || ele.getAttributeNode('data-media').value === 'none') {
                            if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                                if (ele.getAttributeNode('data-slide').value === 'toggle') {
                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                } else if (ele.getAttributeNode('data-slide').value === 'up') {
                                    ele.onclick = function () {dependent.slideToggle(slide_duration / 1);}
                                }
                            } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                                if (ele.getAttributeNode('data-slide').value === 'up') {
                                    $(document).ready(function () {dependent.slideUp(slide_duration / 1);});
                                } else if (ele.getAttributeNode('data-slide').value === 'down') {
                                    $(document).ready(function () {dependent.slideDown(slide_duration / 1);});
                                }
                            }
                        }
                    }
                }
            }
        });       

    })();
    
    (function () { // fade :

        let element = $('[aria-controls]');
        element.each(function (index, ele) {
            if (ele.getAttributeNode('data-fade') !== null) {
                let dependent = $(`#${ele.getAttribute('aria-controls')}`);
                if (dependent !== null) {
                    let DP = dependent.css('display');
                    if (dependent.attr('aria-expanded') === 'true') {
                        dependent.css('display', DP);
                    } else if (dependent.attr('aria-expanded') === 'false') {
                        dependent.css('display', 'none');
                    }
                    if (ele.getAttribute('data-duration') !== null) {
                        var fade_duration = ele.getAttribute('data-duration');
                    }
                    if (dependent.attr('data-event') === 'click' || dependent.attr('data-event') === 'onclick') {
                        if (ele.getAttributeNode('data-fade').value === 'toggle') {
                            ele.onclick = function () {dependent.fadeToggle(fade_duration / 1);}
                        } else if (ele.getAttributeNode('data-fade').value === 'in') {
                            ele.onclick = function () {dependent.fadeIn(fade_duration / 1);}
                        } else if (ele.getAttributeNode('data-fade').value === 'out') {
                            ele.onclick = function () {dependent.fadeOut(fade_duration / 1);}
                        }
                    } else if (dependent.attr('data-event') === 'load' || dependent.attr('data-event') === 'onload') {
                        if (ele.getAttributeNode('data-fade').value === 'in') {

                            $(document).ready(function () {dependent.fadeIn(fade_duration / 1);});
                        } else if (ele.getAttributeNode('data-fade').value === 'out') {
                            $(document).ready(function () {dependent.fadeOut(fade_duration / 1);  });
                        }
                    }
                }
            }
        });

    })();
    
    (function () { // hide 
        
        let element = $('[data-target]');
        element.each(function (index, ele) {
            if (ele.getAttributeNode('data-target') !== null) {
                let dependent = $(`${ele.getAttributeNode('data-target').value}`);
                dependent.each(function (index, dep) {
                    let DP = dependent.css('display');
                    if (dependent.attr('aria-expanded') === 'true') {
                        dependent.css('display', DP);
                    } else if (dependent.attr('aria-expanded') === 'false') {
                        dependent.css('display', 'none');
                    }
                    if (ele.getAttributeNode('data-pattern') !== null) {
                        if (ele.getAttributeNode('data-pattern').value === 'toggle') {
                            ele.addEventListener('click', function() {
                                dependent.toggle(20);
                            });
                        } else if (ele.getAttributeNode('data-pattern').value === 'hide') {
                            ele.addEventListener('click', function() {
                                dependent.hide(20);
                            });
                        } else if (ele.getAttributeNode('data-pattern').value === 'show') {
                            ele.addEventListener('click', function() {
                                dependent.show(20);
                            });
                        } else if (ele.getAttributeNode('data-pattern').value === 'slide-toggle') {
                            ele.addEventListener('click', function() {
                                dependent.slideToggle(20);
                            });
                        } else if (ele.getAttributeNode('data-pattern').value === 'slide-down') {
                            ele.addEventListener('click', function() {
                                dependent.slideDown(20);
                            });
                        } else if (ele.getAttributeNode('data-pattern').value === 'slide-up') {
                            ele.addEventListener('click', function() {
                                dependent.slideUp(20);
                            });
                        }
                    }
                });
            }
        });
    })();

    (function () {
        let element = $('[prevent-default]');
        element.each(function (index, ele) {
            if (ele.getAttributeNode('prevent-default') !== null) {
                ele.onsubmit = function(event) {
                    event.preventDefault();
                } 
            }
        });
    })();


    (function () {
        let element = $('[focus]');
        element.each(function (index, ele) {
            if (ele.getAttributeNode('focus') !== null) {
                window.addEventListener('load', function() {
                    ele.focus();
                });
            }
        });
    })();



// ---------------------------------------------------------------------------------------------------------------------------------------
