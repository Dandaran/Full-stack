try {
    adddlert('a');
    }
    catch (err) {
    // ReferenceError: adddlert is not defined
    alert(err);
    }
    // lanzar excepción personalizada
    throw 'Too big';
    172