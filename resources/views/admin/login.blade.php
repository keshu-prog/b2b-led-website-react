<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin</title>
    <link rel="stylesheet" href="{{ asset('admin/assets/vendors/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/assets/vendors/ti-icons/css/themify-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/assets/vendors/css/vendor.bundle.base.css') }}">
    <link rel="stylesheet" href="{{ asset('admin/assets/vendors/font-awesome/css/font-awesome.min.css') }}">
    
    <link rel="stylesheet" href="{{ asset('admin/assets/css/style.css') }}">
    <link rel="shortcut icon" href="{{ asset('admin/assets/images/favicon.png') }}" />
  </head>
  <body>
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="{{ asset('admin/assets/images/logo.svg') }}">
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <form class="pt-3" action="/dologin" method="POST" id="loginForm">
                    @include('flash/flash-message')
                    @csrf
                    <div class="form-group">
                        <input type="email" name="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username">
                        <div id="emailError" class="text-danger" style="display: none;">Please enter your email.</div>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password">
                        <div id="passwordError" class="text-danger" style="display: none;">Please enter your password.</div>
                    </div>
                    <div class="mt-3 d-grid gap-2">
                        <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                            SIGN IN
                        </button>
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                        <div class="form-check">
                            <label class="form-check-label text-muted">
                                <input type="checkbox" class="form-check-input"> Keep me signed in
                            </label>
                        </div>
                        <a href="#" class="auth-link text-primary">Forgot password?</a>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="{{ asset('admin/assets/vendors/js/vendor.bundle.base.js') }}"></script>
    <script src="{{ asset('admin/assets/js/off-canvas.js') }}"></script>
    <script src="{{ asset('admin/assets/js/misc.js') }}"></script>
    <script src="{{ asset('admin/assets/js/settings.js') }}"></script>
    <script src="{{ asset('admin/assets/js/todolist.js') }}"></script>
    <script src="{{ asset('admin/assets/js/jquery.cookie.js') }}"></script>

    <script>
        $(document).ready(function() {
            $('#loginForm').submit(function(event) {
                var email = $('#exampleInputEmail1').val();
                var password = $('#exampleInputPassword1').val();
                var isValid = true;
                $('#emailError').hide();
                $('#passwordError').hide();
                if (!email) {
                    $('#emailError').show();
                    isValid = false;
                }
                if (!password) {
                    $('#passwordError').show();
                    isValid = false;
                }
                if (!isValid) {
                    event.preventDefault();
                }
            });
        });
    </script>
    <!-- endinject -->
  </body>
</html>